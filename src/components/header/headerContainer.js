import axios from "axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { setAuthReducer, getAuthUser } from "../../redux/authReducer"

export class HeaderContainer extends Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          const { email, id, login } = response.data.data
          this.props.setAuthReducer(email, id, login)
        }
        axios
          .get(
            `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}`,
          )
          .then((response) => {
            this.props.getAuthUser(response.data)
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
