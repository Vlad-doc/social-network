import { applyMiddleware, combineReducers, createStore } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import friendsReducer from "./friendsReducer"
import usersReducer from "./usersReducer"
import authReducer from "./authReducer"
import thunk from "redux-thunk"
import { reducer as formReducer } from "redux-form"
import appReducer from "./appReducer"

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
  form: formReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

window.store = store

export default store
