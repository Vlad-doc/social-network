import React from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "../../utils/validators/validators"
import { LoginControl } from "../common/formsControls/formsControls"

const LoginForm = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={LoginControl}
          placeholder="Login"
          name="login"
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          component={LoginControl}
          name="password"
          validate={[required]}
        />
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
