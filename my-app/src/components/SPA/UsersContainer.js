import React from 'react'
import { connect } from 'react-redux'
import {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount, toggleIsFetching
} from '../../FakeRedux/users_reducer'
import './Users.css'
import Users from './Users'
import axios from 'axios'
import Preloader from './../Preloader'



class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }

    pageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }


    render() {
        if (this.props.isFetching) {
            <Preloader />
        }
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            pageChanged={this.pageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
        />
    }

}

const mapStateToProps = (state) => {

    return {
        users: state.UsersData.users,
        pageSize: state.UsersData.pageSize,
        totalUsersCount: state.UsersData.totalUsersCount,
        currentPage: state.UsersData.currentPage,
        isFetching: state.UsersData.isFetching
    }
}


export default connect(mapStateToProps,
    {
        follow, unfollow,
        setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching
    })(UsersContainer)