import axios from "axios"
import React, { Component } from "react"
import { connect } from "react-redux"
import Header from "./header"
import { setAuthReducer } from "../../redux/authReducer"
import { setUsers } from "../../redux/usersReducer"

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
      })
  }
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  login: state.auth.login,
  auth: state.auth.isAuth,
  user: state.usersPage.users,
})

export default connect(mapStateToProps, { setAuthReducer, setUsers })(
  HeaderContainer,
)
