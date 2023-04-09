import { combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from './profile_reducer';
import messengerReducer from './messenger_reducer';
import usersReducer from "./users_reducer";
import authReducer from './authReducer'
let reducers = combineReducers({
    ProfileData: profileReducer,
    MessengerData: messengerReducer,
    UsersData: usersReducer,
    auth: authReducer,
})

let store = createStore(reducers)
window.store = store
export default store;