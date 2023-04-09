const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    debugger
    switch (action.type) {

        case SET_USER_DATA:
            debugger
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            debugger
            return state;
    }
}
debugger
export const setAuthUserData = (id, login, email) => ({ type: SET_USER_DATA, data: { id, login, email } })

export default authReducer