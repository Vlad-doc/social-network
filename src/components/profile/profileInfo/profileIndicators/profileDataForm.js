import { useState } from "react"
import { Field, reduxForm } from "redux-form"
import { required } from "../../../../utils/validators/validators"
import { Input, TextArea } from "../../../common/formsControls/formsControls"
import style from "../../profile.module.css"

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
  const [job, setJob] = useState(profile.lookingForAJob)
  return (
    <form onSubmit={handleSubmit} className={style.profileForm}>
      <button>save</button>
      {error && <div>{error}</div>}
      <div>
        <label> Full name: </label>
        <Field
          name="fullName"
          component={Input}
          type="text"
          placeholder="Full Name"
          validate={[required]}
        />
      </div>

      <div>
        <label>Looking for a job:</label>
        <Field
          name="lookingForAJob"
          id="lookingForAJob"
          component="input"
          type="checkbox"
          onChange={() => {
            setJob(!job)
          }}
        />
      </div>
      {job ? (
        <div>
          <label>My skills:</label>
          <Field
            name="lookingForAJobDescription"
            component={TextArea}
            type="text"
            placeholder="My skills"
            validate={required}
          />
        </div>
      ) : null}

      <div>
        <label>About me: </label>
        <Field
          name="aboutMe"
          component={TextArea}
          type="text"
          placeholder="About me"
          validate={[required]}
        />
      </div>
      <b>Contacts: </b>

      {Object.keys(profile.contacts).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <Field
            name={`contacts.${key}`}
            component={Input}
            type="text"
            validate={[]}
          />
        </div>
      ))}
    </form>
  )
}

export default reduxForm({ form: "edit-profile" })(ProfileDataForm)
