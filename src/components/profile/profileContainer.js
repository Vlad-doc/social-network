import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {
  getUserData,
  getUserStatus,
  updateUserStatus,
  setPhoto,
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
export class ProfileContainer extends Component {
  updateProfile() {
    let { userId } = this.props.params
    const navigate = this.props.navigate
    if (!userId) {
      userId = this.props.userAuth.id
      if (!userId) {
        navigate("/login")
      }
    }
    this.props.getUserData(userId)
    this.props.getUserStatus(userId)
  }
  componentDidMount() {
    this.updateProfile()
  }
  componentDidUpdate(prevProfile) {
    console.log(this.props.params.userId)
    console.log(prevProfile.params.userId)
    if (this.props.params.userId != prevProfile.params.userId) {
      this.updateProfile()
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        isHolder={!this.props.params.userId}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
        setPhoto={this.props.setPhoto}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userAuth: state.auth,
  status: state.profilePage.status,
})

export default connect(mapStateToProps, {
  getUserData,
  getUserStatus,
  updateUserStatus,
  setPhoto,
  getAuthorizedUserDetails,
})(getParams(ProfileContainer))
