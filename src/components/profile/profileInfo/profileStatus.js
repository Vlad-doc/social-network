import React from "react"
import { useState } from "react"
import profInfoStyle from "./profileInfo.module.css"

const ProfileStatus = (props) => {
  console.log("render")
  const [hide, setHide] = useState(true)
  const [status, setStatus] = useState(props.status)
  console.log(status)
  const handleChange = () => {
    setHide((prevState) => !prevState)
  }
  const changeStatus = (e) => {
    setStatus(e.target.value)
    props.updateUserStatus(e.target.value)
  }
  return (
    <div className={profInfoStyle.status}>
      {hide ? (
        <h4 onDoubleClick={handleChange}>{props.status || "---"}</h4>
      ) : (
        <div>
          <input
            type="text"
            autoFocus={true}
            value={props.status}
            onBlur={handleChange}
            onChange={changeStatus}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatus
