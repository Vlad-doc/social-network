import { combineReducers, createStore } from "redux"
import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"
import friendsReducer from "./friendsReducer"

const rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  friendsPage: friendsReducer,
})

const store = createStore(rootReducer)

export default store
