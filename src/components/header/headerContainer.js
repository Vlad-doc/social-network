import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { setAuthReducer, getAuthUser } from "../../redux/authReducer"
import { getLogIn, getUserProfile } from "../../api/api"

export class HeaderContainer extends Component {
  componentDidMount() {
    getLogIn().then((response) => {
      if (response.resultCode === 0) {
        const { email, id, login } = response.data
        this.props.setAuthReducer(email, id, login)
      }
      getUserProfile(response.data.id).then((response) => {
        this.props.getAuthUser(response)
      })
    })
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

export default connect(mapStateToProps, { setAuthReducer, getAuthUser })(
  HeaderContainer,
)
