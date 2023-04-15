import API from "../API/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS'



let initialState = {
    users: [

    ],
    pageSize: 100,
    totalUsersCount: 300,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    let stateCopy = {}
    switch (action.type) {
        case FOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return { ...u, followed: true }
                    }
                    return u
                }),
                newStatus: 'Add'
            }

            return stateCopy;
        case UNFOLLOW:
            stateCopy = {
                ...state,
                users: state.users.map(u => {
                    if (action.id === u.id) {
                        return { ...u, followed: false }
                    }
                    return u
                }),
                newStatus: 'Remove'
            }
            return stateCopy;
        case SET_USERS:
            stateCopy = { ...state, users: action.users }
            return stateCopy
        case SET_CURRENT_PAGE:
            stateCopy = { ...state, currentPage: action.currentPage }
            return stateCopy
        case SET_TOTAL_USERS_COUNT:


            stateCopy = { ...state, totalUsersCount: action.totalUsersCount }
            return stateCopy
        case TOGGLE_IS_FETCHING:



            stateCopy = { ...state, isFetching: action.isFetching }
            return stateCopy
        case FOLLOWING_IN_PROGRESS:

            return {
                ...state, followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(id => id != action.id)
            }
        default:
            return state;

    }

}

export default usersReducer

export const follow = (id) => ({ type: FOLLOW, id })
export const unfollow = (id) => ({ type: UNFOLLOW, id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (followingInProgress, id) => ({ type: FOLLOWING_IN_PROGRESS, followingInProgress, id })

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleIsFetching(true))
        API.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            dispatch(toggleIsFetching(false))

        })
    }
}

export const pageChanged = (pageNumber, pageSize) => {
    return (dispatch) => {
        debugger
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        API.getOtherUsers(pageNumber, pageSize).then(response => {
            dispatch(setUsers(response.data.items))
            dispatch(setTotalUsersCount(response.data.totalCount))
            dispatch(toggleIsFetching(false))
        })
    }
}

export const following = (id) => {
    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, id))
        API.toggleFollowing(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleFollowingInProgress(false, id))

        })
    }
}

export const unFollowing = (id) => {
    return (dispatch) => {

        dispatch(toggleFollowingInProgress(true, id))
        API.toggleUnFollowing(id).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleFollowingInProgress(false, id))

        })


    }
}