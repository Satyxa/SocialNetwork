import React from 'react'
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../FakeRedux/profile_reducer';
import { useParams } from "react-router-dom";
class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.match.params.userId;
        // let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 28511; //Пишем Ваш id
        }
        console.log(this.userId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
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
            <Profile {...this.props} profile={this.props.profile} />
        );
    }
}

let mapStateToProps = (state) => ({

    profile: state.ProfileData.profile
})

function withRouter(Children) {
    return (props) => {

        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))