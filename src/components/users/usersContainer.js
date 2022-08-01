import { Component } from "react"
import { connect } from "react-redux"
import {
  follow,
  setUsers,
  unFollow,
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
} from "../../redux/usersReducer"
import Users from "./users"
import Preloader from "../common/preloader/preloader"
import { getUsers } from "../../api/api"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setIsLoading(true)
    getUsers(this.props.pageSize, this.props.currentPage).then((response) => {
      this.props.setIsLoading(false)
      this.props.setUsers(response.items)
      this.props.setTotalUsersCount(Math.ceil(response.totalCount / 200))
    })
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.setIsLoading(true)
    getUsers(this.props.pageSize, page).then((response) => {
      this.props.setIsLoading(false)
      this.props.setUsers(response.items)
    })
  }

  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users
            totalUsersCount={this.props.totalUsersCount}
            onPageChanged={this.onPageChanged}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
          />
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
})

export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsLoading,
})(UsersContainer)
