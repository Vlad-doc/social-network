import React from "react"
import style from "../friends/friends.module.css"
import { connect } from "react-redux"
import Friend from "./friend"

export const Friends = ({ friendsPage }) => {
  return (
    <div className={style.item__friends}>
      {friendsPage.friends.map((friend) => (
        <Friend key={friend.id} id={`${friend.id}`} friend={friend} />
      ))}
    </div>
  )
}
const mapStateToProps = (state) => ({
  friendsPage: state.friendsPage,
})

export default connect(mapStateToProps)(Friends)
