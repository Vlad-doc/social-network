import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import store from "./redux/reduxStore"
import StoreContext, { Provider } from "./storeContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* 
          <App
          // // state={state}
          // // dispatch={(ac) => store.dispatch(ac)}
          // // store={store}
          // />
        */}
        {/* <StoreContext.Provider value={store}>
          <App/>
        </StoreContext.Provider> */}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
  )
  console.log("render")
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))
