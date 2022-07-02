import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

const posts = [
  { id: 1, message: "Hello", likeCount: 5 },
  { id: 2, message: "My first post", likeCount: 20 },
]
const dialogs = [
  { id: 1, name: "Valera" },
  { id: 2, name: "Anton" },
  { id: 3, name: "Alex" },
  { id: 4, name: "Mikhail" },
]
const messages = [
  { id: 1, message: "Hi" },
  { id: 2, message: "World" },
  { id: 3, message: "You are beautiful" },
  { id: 4, message: "YO" },
]

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App posts={posts} dialogs={dialogs} messages={messages} />
    </BrowserRouter>
  </React.StrictMode>,
)
