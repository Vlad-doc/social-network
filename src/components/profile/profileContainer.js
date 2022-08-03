import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import { setUserProfile } from "../../redux/profileReducer"
import { useParams } from "react-router-dom"
import { getUserData } from "../../redux/profileReducer"

const getParams = (WrapperContainer) => (props) => {
  return <WrapperContainer {...props} params={useParams("/profile")} />
}

export class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props.params
    this.props.getUserData(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userAuth: state.auth.authUser,
})

export default connect(mapStateToProps, {
  setUserProfile,
  getUserData,
})(getParams(ProfileContainer))
