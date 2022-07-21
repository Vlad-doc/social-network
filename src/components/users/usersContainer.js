import { connect } from "react-redux"
import Users from "./users"
import { followAC, setUsersAC, unFollowAC } from "../../redux/usersReducer"

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
})
const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(followAC(id)),
  unFollow: (id) => dispatch(unFollowAC(id)),
  setUsers: (users) => dispatch(setUsersAC(users)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
