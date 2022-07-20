import { connect } from "react-redux"
import Users from "./users"
import { follow, unFollow } from "../../redux/usersReducer"

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
})
const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(follow(id)),
  unFollow: (id) => dispatch(unFollow(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
