import { Component } from "react"
import { connect } from "react-redux"
import {
  follow,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  getUsers,
} from "../../redux/usersReducer"
import Users from "./users"
import Preloader from "../common/preloader/preloader"
import WithAuthRedirect from "../hoc/withAuthRedirect"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage)
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.getUsers(this.props.pageSize, page)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isFetching: state.usersPage.isFetching,
  followProgress: state.usersPage.followProgress,
})

export default WithAuthRedirect(
  connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setTotalUsersCount,
    getUsers,
  })(UsersContainer),
)
