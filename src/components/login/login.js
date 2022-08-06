import React from "react"
import { Field, reduxForm } from "redux-form"

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field component={"input"} placeholder="Login" name="login" />
      </div>
      <div>
        <Field placeholder="Password" component={"input"} name="password" />
      </div>
      <div>
        <Field type="checkbox" component={"input"} name="rememberMe" />
        remember me
      </div>
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
    console.log(formData)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
