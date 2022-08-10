import React from "react"
import { connect } from "react-redux"
import { Navigate } from "react-router"

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
})

const WithAuthRedirect = (Component) => {
  const WrapperComponent = (props) => {
    if (!props.isAuth) return <Navigate to={"/login"} />
    return <Component {...props} />
  }
  return connect(mapStateToProps)(WrapperComponent)
}

export default WithAuthRedirect
