import React from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { LoginControl } from "../common/formsControls/formsControls"
import { connect } from "react-redux"
import { login } from "../../redux/authReducer"
import { Navigate } from "react-router-dom"
import style from "../common/formsControls/formsControls.module.css"

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={LoginControl}
          placeholder="Login"
          name="email"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          component={LoginControl}
          name="password"
          validate={[required]}
          type="password"
        />
      </div>
      <div>
        <Field type="checkbox" component={"input"} name="rememberMe" />
        remember me
      </div>
      {props.error ? (
        <div className={style.loginError}>{props.error}</div>
      ) : null}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.auth) {
    return <Navigate to={`/profile`} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default connect(
  (state) => ({
    auth: state.auth.isAuth,
    userId: state.auth.id,
  }),
  { login },
)(Login)
