import axios from "axios"
import { Component } from "react"
import stylesUsers from "./styleUsers.module.css"
import userPhoto from "../../assets/images/user.png"

class Users extends Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => this.props.setUsers(response.data.items))
  }

  render() {
    return (
      <div>
        <div className={stylesUsers.list}>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        {this.props.users.map((user) => (
          <div key={user.id} className={stylesUsers.container}>
            <div className={stylesUsers.buttonBlock}>
              {user.followed ? (
                <button onClick={() => this.props.unFollow(user.id)}>
                  UnFollow
                </button>
              ) : (
                <button onClick={() => this.props.follow(user.id)}>
                  Follow
                </button>
              )}
            </div>
            <div className={stylesUsers.infoBlock}>
              <div className={stylesUsers.infoBlock__image}>
                <img
                  src={
                    user.photos.small !== null ? user.photos.small : userPhoto
                  }
                  alt="ava"
                />
              </div>

              <div className={stylesUsers.infoBlock__user}>
                <div className={stylesUsers.infoBlock__user_name}>
                  {user.name}
                </div>
                <div>{user.status}</div>
              </div>
              <div className={stylesUsers.infoBlock__location}>
                <div>City: {"user.location.city"}</div>
                <div>Country: {"user.location.country"}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Users
