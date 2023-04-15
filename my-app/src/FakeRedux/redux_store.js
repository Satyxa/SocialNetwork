import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux"
import profileReducer from './profile_reducer';
import messengerReducer from './messenger_reducer';
import usersReducer from "./users_reducer";
import authReducer from './authReducer'
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    ProfileData: profileReducer,
    MessengerData: messengerReducer,
    UsersData: usersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))
window.store = store
export default store;