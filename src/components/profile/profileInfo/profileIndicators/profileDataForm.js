import { Field, reduxForm } from "redux-form"
import style from "../../profile.module.css"

const ProfileDataForm = ({ profile, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className={style.profileForm}>
      <button>save</button>

      <div>
        <label> Full name: </label>
        <Field
          name="fullName"
          component="input"
          type="text"
          placeholder="Full Name"
        />
      </div>

      <div>
        <label>Looking for a job:</label>
        <Field
          name="lookingForAJob"
          id="lookingForAJob"
          component="input"
          type="checkbox"
        />
      </div>

      <div>
        <label>My skills:</label>
        <Field
          name="lookingForAJobDescription"
          component="input"
          type="textArea"
          placeholder="My skills"
        />
      </div>

      <div>
        <label>About me: </label>
        <Field
          name="aboutMe"
          component="input"
          type="textArea"
          placeholder="About me"
        />
      </div>
      <b>Contacts: </b>

      {Object.keys(profile.contacts).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <Field
            name={`contacts.${key}`}
            component="input"
            type="text"
            placeholder="https://"
          />
        </div>
      ))}
    </form>
  )
}

export default reduxForm({ form: "edit-profile" })(ProfileDataForm)
