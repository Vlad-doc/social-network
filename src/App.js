import "./App.css"
import Dialogs from "./components/dialogs/dialogs"
import Header from "./components/header/header"
import Navbar from "./components/navbar/navbar"
import Profile from "./components/profile/profile"

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />

      <div className="wrapper-content">
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  )
}

export default App
