import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./redux/state"

const root = ReactDOM.createRoot(document.getElementById("root"))

let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          addPost={() => store.addPost()}
          updateNewPostText={(text) => store.updateNewPostText(text)}
        />
      </BrowserRouter>
    </React.StrictMode>,
  )
  console.log("render")
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)
