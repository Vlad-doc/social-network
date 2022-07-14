import "./App.css"
import { Routes, Route } from "react-router-dom"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import { News } from "./components/news/news"
import { Music } from "./components/music/music"
import { Settings } from "./components/tuning/settings"
import DialogsContainer from "./components/dialogs/dialogsContainer"

const App = ({ store }) => {
  return (
    <div className="wrapper">
      <Header />
      {/* <Navbar store={store} /> */}
      <Navbar />
      <div className="wrapper-content">
        <Routes>
          {/* <Route path="/profile" element={<Profile store={store} />} /> */}
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/dialogs" element={<DialogsContainer store={store} />} /> */}
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
