import "./App.css"
import { Routes, Route } from "react-router-dom"
import Dialogs from "./components/dialogs/dialogs"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"
import { News } from "./components/news/news"
import { Music } from "./components/music/music"

const App = ({ posts, dialogs, messages }) => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile posts={posts} />} />
          <Route
            path="/dialogs"
            element={<Dialogs dialogs={dialogs} messages={messages} />}
          />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
