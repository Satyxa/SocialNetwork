const AddPostId = 'ADD-POST';
const newPostTextId = 'NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
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
    profile: null
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
        default:
            return state;

    }

}

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer