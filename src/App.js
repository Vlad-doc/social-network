import "./App.css"
import { Routes, Route } from "react-router-dom"
import Dialogs from "./components/dialogs/dialogs"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import { News } from "./components/news/news"
import { Music } from "./components/music/music"
import { Settings } from "./components/tuning/settings"

const App = ({ state, addPost, updateNewPostText }) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar state={state.friendsPage} />
      <div className="wrapper-content">
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                state={state.profilePage}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
              />
            }
          />
          <Route
            path="/dialogs"
            element={<Dialogs state={state.dialogsPage} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
