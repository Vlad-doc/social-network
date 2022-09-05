import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import {
  getUserData,
  getUserStatus,
  updateUserStatus,
  setPhoto,
} from "../../redux/profileReducer"
import { getAuthorizedUserDetails } from "../../redux/authReducer"

const getParams = (WrapperContainer) => (props) => {
  return <WrapperContainer {...props} params={useParams("/profile")} />
}
export class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props.params
    this.props.getUserData(userId)
    this.props.getUserStatus(userId)
  }
  componentDidUpdate(prevProfile) {
    const { userId } = this.props.params
    if (userId !== prevProfile.params.userId) {
      this.props.getUserData(userId)
      this.props.getUserStatus(userId)
    }
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        userAuth={this.props.userAuth}
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
