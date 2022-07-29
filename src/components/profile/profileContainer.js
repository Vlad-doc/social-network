import { Component } from "react"
import Profile from "./profile"
import { connect } from "react-redux"
import axios from "axios"
import { setUserProfile } from "../../redux/profileReducer"
import { useParams } from "react-router-dom"

const getParams = (WrapperContainer) => (props) => {
  return <WrapperContainer {...props} params={useParams("/profile")} />
}

export class ProfileContainer extends Component {
  componentDidMount() {
    const { userId } = this.props.params
    console.log(this.props)
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then((response) => this.props.setUserProfile(response.data))
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, { setUserProfile })(
  getParams(ProfileContainer),
)
