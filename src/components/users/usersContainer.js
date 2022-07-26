import { Component } from "react"
import axios from "axios"
import { connect } from "react-redux"
import {
  followAC,
  setUsersAC,
  unFollowAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setIsLoadingAC,
} from "../../redux/usersReducer"
import Users from "./users"
import Preloader from "../common/preloader/preloader"

class UsersContainer extends Component {
  componentDidMount() {
    this.props.toggleLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`,
      )
      .then((response) => {
        this.props.toggleLoading(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(Math.ceil(response.data.totalCount / 200))
      })
  }
  onPageChanged = (page) => {
    this.props.setPage(page)
    this.props.toggleLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${page}`,
      )
      .then((response) => {
        this.props.toggleLoading(false)
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
const mapDispatchToProps = (dispatch) => ({
  follow: (id) => dispatch(followAC(id)),
  unFollow: (id) => dispatch(unFollowAC(id)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setPage: (index) => dispatch(setCurrentPageAC(index)),
  setTotalUsersCount: (totalCount) =>
    dispatch(setTotalUsersCountAC(totalCount)),
  toggleLoading: (bool) => dispatch(setIsLoadingAC(bool)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
