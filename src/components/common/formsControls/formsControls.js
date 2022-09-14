import style from "./formsControls.module.css"

export const TextArea = ({ input, meta: { touched, error } }) => {
  return (
    <div className={style.input}>
      <textarea
        {...input}
        className={!touched ? undefined : error ? style.error : undefined}
      />
      <h3>{touched && error && <span>{error}</span>}</h3>
    </div>
  )
}
export const Input = ({ input, meta: { touched, error } }) => {
  return (
    <div className={style.input}>
      <input
        {...input}
        className={!touched ? undefined : error ? style.error : undefined}
      />
      <h3>{touched && error && <span>{error}</span>}</h3>
    </div>
  )
}
export const LoginControl = ({ input, meta: { touched, error }, ...props }) => {
  return (
    <div className={style.input}>
      <input
        {...input}
        className={!touched ? undefined : error ? style.error : undefined}
        {...props}
      />
      <h3>{touched && error && <span>{error}</span>}</h3>
    </div>
  )
}
