import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {
  getUserData,
  getUserStatus,
  updateUserStatus,
  setPhoto,
  addPostText,
  setProfileData,
} from "../../redux/profileReducer"
import { getAuthorizedUserDetails } from "../../redux/authReducer"

const getParams = (WrapperContainer) => (props) => {
  return (
    <WrapperContainer
      {...props}
      params={useParams("/profile")}
      navigate={useNavigate()}
    />
  )
}
class ProfileContainer extends Component {
  updateProfile() {
    let { userId } = this.props.params
    const navigate = this.props.navigate
    if (!userId) {
      userId = this.props.userAuth.isAuth
        ? this.props.userAuth.id
        : this.props.profile.userId
      if (!userId) {
        navigate("/login")
      }
    }
    this.props.getUserData(userId)
    this.props.getUserStatus(userId)
  }
  componentDidMount() {
    if (!this.props.userAuth.isAuth) {
      if (!this.props.params.userId) return null
    }
    this.updateProfile()
  }
  componentDidUpdate(prevProfile) {
    if (this.props.params.userId !== prevProfile.params.userId) {
      if (this.props.userAuth.id) {
        this.updateProfile()
      }
    }
  }
  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage,
  userAuth: state.auth,
  status: state.profilePage.status,
})

export default connect(mapStateToProps, {
  getUserData,
  getUserStatus,
  updateUserStatus,
  setPhoto,
  getAuthorizedUserDetails,
  addPostText,
  setProfileData,
})(getParams(ProfileContainer))
