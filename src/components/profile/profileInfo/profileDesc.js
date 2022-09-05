import React from "react"
import style from "./profileInfo.module.css"

const ProfileData = ({ profile }) => {
  return (
    <div className={style.description}>
      <div>
        <b> Full name: </b> {profile.fullName}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me: </b>
        {profile.aboutMe}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(profile.contacts).map((key) => (
          <Contact
            key={key}
            contactTitle={key}
            contactValue={profile.contacts[key]}
          />
        ))}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contacts}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  )
}

export default ProfileData
