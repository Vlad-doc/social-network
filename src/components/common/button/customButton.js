import style from "./customButton.module.css"

const CustomButton = ({ children, ...props }) => {
  return (
    <div className={style.buttonBlock}>
      <button {...props}>{children}</button>
    </div>
  )
}

export default CustomButton
