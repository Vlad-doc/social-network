import React from "react"
import { NavLink } from "react-router-dom"
import dialogsStyle from "./dialogs.module.css"

function Dialogs() {
  return (
    <div className={dialogsStyle.dialogs}>
      <div className={dialogsStyle.dialogItems}>
        <div className={dialogsStyle.dialog}>
          <NavLink to="/dialogs/1">Valera</NavLink>
        </div>
        <div className={dialogsStyle.dialog}>
          <NavLink to="/dialogs/2">Valera</NavLink>
        </div>
        <div className={dialogsStyle.dialog}>
          <NavLink to="/dialogs/3">Valera</NavLink>
        </div>
        <div className={dialogsStyle.dialog}>
          <NavLink to="/dialogs/4">Valera</NavLink>
        </div>
        <div className={dialogsStyle.dialog}>
          <NavLink to="/dialogs/5">Valera</NavLink>
        </div>
      </div>
      <div className={dialogsStyle.messages}>
        <div className={dialogsStyle.message}>Hello</div>
        <div className={dialogsStyle.message}>Hi</div>
        <div className={dialogsStyle.message}>Privet</div>
      </div>
    </div>
  )
}

export default Dialogs
