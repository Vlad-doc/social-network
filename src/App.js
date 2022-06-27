import "./App.css"

const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img
          src="https://mms.businesswire.com/media/20220308006218/en/774915/22/Coca-Cola_black_and_white_bottles_logo.jpg"
          alt="logo"
        />
      </header>

      <nav className="nav">
        <div>
          <a href="">Profile</a>
        </div>
        <div>
          <a href="">Messages</a>
        </div>
        <div>
          <a href="">News</a>
        </div>
        <div>
          <a href="">Music</a>
        </div>
        <div>
          <a href="">Settings</a>
        </div>
      </nav>
      <div className="content">Main Content</div>
    </div>
  )
}

export default App
