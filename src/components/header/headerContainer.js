import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { getAuthorizedUserDetails } from "../../redux/authReducer"

export class HeaderContainer extends Component {
  componentDidMount() {
    this.props.getAuthorizedUserDetails()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  auth: state.auth.isAuth,
  userAuth: state.auth.authUser,
})

export default connect(mapStateToProps, {
  getAuthorizedUserDetails,
})(HeaderContainer)
