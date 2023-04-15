import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "ba1fedbc-35ee-4a14-9555-18701b387fa0"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

const API = {
    getUsers(currentPage = 1, pageSize = 100) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },

    getOtherUsers(pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`)

    },

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status) {
        return instance.put(`profile/status`, { status })
    },

    getAuthUserData() {
        return instance.get(`auth/me`)
    },

    toggleFollowing(id) {
        return instance.post(`follow/${id}`, {})
    },
    toggleUnFollowing(id) {
        return instance.delete(`follow/${id}`)
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe })
    },
    logout() {
        debugger
        return instance.delete(`auth/login`)
    }
}

export default API