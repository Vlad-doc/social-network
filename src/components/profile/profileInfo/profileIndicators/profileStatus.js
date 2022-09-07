import React from "react"
import { useState } from "react"
import profInfoStyle from "../profileInfo.module.css"

const ProfileStatus = ({ status, updateUserStatus }) => {
  const [hide, setHide] = useState(true)
  const [locStatus, setLocStatus] = useState(status)
  const handleChange = () => {
    setHide((prevState) => !prevState)
  }
  const changeStatus = (e) => {
    setLocStatus(e.target.value)
    updateUserStatus(e.target.value)
  }
  return (
    <div className={profInfoStyle.status}>
      {hide ? (
        <>
          <b>Status: </b>
          <h4 onDoubleClick={handleChange}>{status || "---"}</h4>
        </>
      ) : (
        <input
          type="text"
          autoFocus={true}
          value={status ? status : ""}
          onBlur={handleChange}
          onChange={changeStatus}
        />
      )}
    </div>
  )
}

export default ProfileStatus
