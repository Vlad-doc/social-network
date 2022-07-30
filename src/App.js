import "./App.css"
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import { News } from "./components/news/news"
import { Music } from "./components/music/music"
import { Settings } from "./components/tuning/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer"
import UsersContainer from "./components/users/usersContainer"
import ProfileContainer from "./components/profile/profileContainer"
import HeaderContainer from "./components/header/headerContainer"

const App = () => {
  return (
    <div className="wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="wrapper-content">
        <Routes>
          <Route path="/profile/:userId" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
