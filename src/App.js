import "./App.css"
import Header from "./components/header"
import Navbar from "./components/navbar"
import Profile from "./components/profile"

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  )
}

export default App
