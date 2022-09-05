import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { getAuthorizedUserDetails, logout } from "../../redux/authReducer"
import { getUserData } from "../../redux/profileReducer"

export class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthorizedUserDetails()
    this.props.getUserData(this.props.authUser.id)
  }

  render() {
    return (
      <Header
        profile={this.props.profile}
        logout={this.props.logout}
        authUser={this.props.authUser}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: state.auth,
  profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {
  getAuthorizedUserDetails,
  logout,
  getUserData,
})(HeaderContainer)
