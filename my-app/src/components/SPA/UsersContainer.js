import React from 'react'
import { connect } from 'react-redux'
import {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingInProgress,
    getUsersThunk, pageChanged, following, unFollowing
} from '../../FakeRedux/users_reducer'
import './Users.css'
import Users from './Users'
import Preloader from './../Preloader'
import { Navigate } from 'react-router-dom'
import withAuthRedirect from './../../HOC/withAuthRedirect'
import { compose } from 'redux'


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    pageChanged = (pageNumber) => {
        this.props.pageChanged(pageNumber, this.props.pageSize)
    }


    render() {

        // if (!this.props.isAuth) { return <Navigate to={'/login'} /> }
        if (this.props.isFetching) {
            <Preloader />
        }
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            users={this.props.users}
            currentPage={this.props.currentPage}
            pageChanged={this.pageChanged}
            followingInProgress={this.props.followingInProgress}
            unFollowing={this.props.unFollowing}
            following={this.props.following}
        />

    }

}

const mapStateToProps = (state) => {

    return {
        users: state.UsersData.users,
        pageSize: state.UsersData.pageSize,
        totalUsersCount: state.UsersData.totalUsersCount,
        currentPage: state.UsersData.currentPage,
        isFetching: state.UsersData.isFetching,
        followingInProgress: state.UsersData.followingInProgress,

    }
}

export default compose(
    connect(mapStateToProps,
        {
            follow, unfollow,
            setUsers, setCurrentPage,
            setTotalUsersCount, toggleIsFetching,
            getUsersThunk, pageChanged,
            following, unFollowing

        }),
    withAuthRedirect
)(UsersContainer)
