import API from "../API/api";

const AddPostId = 'ADD-POST';
const newPostTextId = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    Posts: {
        PostData: [
            {
                id: 5,
                name: 'Юлия мельникова',
                message: 'Здарова',
                likesCount: 17,
                dislikesCount: 20
            },
        ],
    },
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case AddPostId:
            let newPost = {
                id: 7,
                message: action.message,
                likesCount: 0,
                dislikesCount: 0
            }
            let stateCopy = { ...state }
            stateCopy.Posts.PostData = [...state.Posts.PostData]
            stateCopy.Posts.PostData.unshift(newPost)
            console.log(state.newPostText);
            stateCopy.newPostText = ''
            console.log(state.newPostText);
            return stateCopy;
        case newPostTextId:
            let CopyState = { ...state }
            CopyState.newPostText = action.newText;
            return CopyState;
        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, status: action.status }
        default:
            return state;

    }

}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export const setUserStatus = (status) => ({
    type: SET_STATUS, status
})

export default profileReducer


export const getUserProfile = (id) => {
    return (dispatch) => {

        API.getUserProfile(id).then(response => {
            dispatch(setUserProfile(response.data))
        })


    }
}

export const getUserStatus = (id) => {
    return (dispatch) => {

        API.getUserStatus(id).then(response => {
            dispatch(setUserStatus(response.data))
        })


    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {

        API.updateUserStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
            }
        })


    }
}
