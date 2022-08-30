import Profile from "./profile"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import {
  getUserData,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profileReducer"
import { useEffect } from "react"

export const ProfileContainer = (props) => {
  const { userId } = useParams("/profile")
  const navigate = useNavigate()
  useEffect(() => {
    props.getUserData(userId)
    props.getUserStatus(userId)
  }, [userId])
  return (
    <Profile
      {...props}
      profile={props.profile}
      status={props.status}
      updateUserStatus={props.updateUserStatus}
    />
  )
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  userAuth: state.auth.authUser,
  status: state.profilePage.status,
})

export default connect(mapStateToProps, {
  getUserData,
  getUserStatus,
  updateUserStatus,
})(ProfileContainer)
