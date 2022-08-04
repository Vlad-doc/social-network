import React from "react"
import { useState } from "react"
import profInfoStyle from "./profileInfo.module.css"

const ProfileStatus = (props) => {
  const [status, setStatus] = useState(true)
  const handleChange = () => {
    setStatus((prevState) => !prevState)
  }

  return (
    <div className={profInfoStyle.status}>
      {status ? (
        <h4 onDoubleClick={handleChange}>{props.status}</h4>
      ) : (
        <div>
          <input
            type="text"
            autoFocus={true}
            value={props.status}
            onBlur={handleChange}
            onChange={() => {}}
          />
        </div>
      )}
    </div>
  )
}

export default ProfileStatus
