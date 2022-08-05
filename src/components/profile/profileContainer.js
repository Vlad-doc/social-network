import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import {
  getUserData,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer"

const getParams = (WrapperContainer) => (props) => {
  return <WrapperContainer {...props} params={useParams("/profile")} />
}

export class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props.params
    this.props.getUserData(userId)
    this.props.getUserStatus(userId)
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userAuth: state.auth.authUser,
  status: state.profilePage.status,
})

export default connect(mapStateToProps, {
  getUserData,
  getUserStatus,
  updateUserStatus,
})(getParams(ProfileContainer))
