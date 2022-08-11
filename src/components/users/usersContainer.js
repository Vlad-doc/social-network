import { Component } from "react"
import { connect } from "react-redux"
import {
  follow,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  requestUsers,
} from "../../redux/usersReducer"
import Users from "./users"
import Preloader from "../common/preloader/preloader"
import {
  getCurrentPage,
  getFollowProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../selectors/usersSelector"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage)
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.requestUsers(this.props.pageSize, page)
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
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followProgress: getFollowProgress(state),
})

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  requestUsers,
})(UsersContainer)
