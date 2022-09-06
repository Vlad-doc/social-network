import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { logout } from "../../redux/authReducer"

export class HeaderContainer extends Component {
  render() {
    return <Header logout={this.props.logout} authUser={this.props.authUser} />
  }
}

const mapStateToProps = (state) => ({
  authUser: state.auth,
})

export default connect(mapStateToProps, {
  logout,
})(HeaderContainer)
