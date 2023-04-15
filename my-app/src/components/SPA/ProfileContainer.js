import React from 'react'
import Profile from './Profile';
import { connect } from 'react-redux';
import {
    setUserProfile, getUserProfile,
    getUserStatus, updateUserStatus
} from '../../FakeRedux/profile_reducer';
import { useParams } from "react-router-dom";
import withAuthRedirect from './../../HOC/withAuthRedirect'
import { compose } from 'redux';

class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 28511;
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.isMain !== prevProps.isMain) {
            if (this.props.isMain) {
                this.redirectToMainUser();
            }
        }
    }


    render() {
        return (
            <Profile {...this.props}
                updateUserStatus={this.props.updateUserStatus}
                status={this.props.status} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.ProfileData.profile,
    status: state.ProfileData.status
})

function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

export default compose(connect
    (
        mapStateToProps,
        {
            setUserProfile,
            getUserProfile,
            getUserStatus,
            updateUserStatus
        }
    ),
    withAuthRedirect,
    withRouter
)(ProfileContainer)