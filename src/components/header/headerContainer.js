import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { getAuthorizedUserDetails, logout } from "../../redux/authReducer"

export class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthorizedUserDetails()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.isAuth,
  userAuth: state.auth.authUser,
})

export default connect(mapStateToProps, {
  getAuthorizedUserDetails,
  logout,
})(HeaderContainer)
