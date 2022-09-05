import "./App.css"
import "antd/dist/antd.min.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import { News } from "./components/news/news"
import { Music } from "./components/music/music"
import { Settings } from "./components/tuning/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer"
import UsersContainer from "./components/users/usersContainer"
import ProfileContainer from "./components/profile/profileContainer"
import HeaderContainer from "./components/header/headerContainer"
import Login from "./components/login/login"
import { useLayoutEffect } from "react"
import { connect } from "react-redux/es/exports"
import { initializeAPP } from "./redux/appReducer"
import Preloader from "./components/common/preloader/preloader"

const App = (props) => {
  useLayoutEffect(() => {
    props.initializeAPP()
  })

  return !props.initialized ? (
    <Preloader />
  ) : (
    <div className="wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="wrapper-content">
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":userId" element={<ProfileContainer />} />
          </Route>
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default connect(
  (state) => ({
    initialized: state.app.initialized,
  }),
  { initializeAPP },
)(App)
