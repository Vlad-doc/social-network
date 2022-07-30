import { Component } from "react"
import axios from "axios"
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

class UsersContainer extends Component {
  componentDidMount() {
    this.props.setIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        this.props.setIsLoading(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 200))
      })
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page)
    this.props.setIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`,
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        this.props.setIsLoading(false)
        this.props.setUsers(response.data.items)
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
