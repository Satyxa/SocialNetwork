import API from "../API/api"

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const ERROR = 'ERROR'

let initialState = {
    login: null,
    email: null,
    id: null,
    isAuth: false,
    authError: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:

            return {
                ...state,
                ...action.data,
                authError: false

            }
        case ERROR:

            return {
                ...state,
                authError: action.authError
            }
        default:

            return state;
    }
}

export const setAuthUserData = (email, userId, login, isAuth) => (
    {
        type: SET_AUTH_USER_DATA, data: { email, userId, login, isAuth }
    })


export const errorResultCode = () => ({
    type: ERROR, authError: true
})

export default authReducer


export const getAuthUserData = () => {

    return (dispatch) => {

        API.getAuthUserData().then(response => {

            if (response.data.resultCode === 0) {

                let { email, id, login } = response.data.data
                dispatch(setAuthUserData(email, id, login, true))
            }
        })


    }
}


export const login = (email, password, rememberMe) => {

    return (dispatch) => {

        API.login(email, password, rememberMe).then(response => {


            if (response.data.resultCode === 0) {

                dispatch(getAuthUserData())
            } else if (response.data.resultCode === 10) {
                alert('капча')
            } else {
                debugger
                dispatch(errorResultCode(true))
            }

        })


    }
}

export const logout = () => {

    return (dispatch) => {

        API.logout().then(response => {
            console.log(response);

            if (response.data.resultCode === 0) {

                dispatch(setAuthUserData(null, null, null, false))
            }
        })


    }
}