import { Field, reduxForm } from "redux-form"
import style from "../profileInfo.module.css"

const ProfileDataForm = ({ profile }) => {
  return (
    <form action="">
      <button>save</button>
      <div>
        <b> Full name: </b>
        <Field
          name="fullName"
          component="input"
          type="text"
          placeholder="Full Name"
        />
      </div>
      <div>
        <b>Looking for a job:</b>
        <label>
          <Field
            name="lookingForAJob"
            component="input"
            type="radio"
            value={profile.lookingForAJob}
          />
        </label>
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
    </form>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contacts}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  )
}

export default reduxForm({ form: "edit-form" })(ProfileDataForm)
