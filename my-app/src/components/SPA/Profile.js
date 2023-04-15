import React from 'react'
import './Profile.css';
import Info from './Profile/Info/Info';
import PostsContainer from './Profile/ProfilePosts/posts_container';

function Profile(props) {
    return (
        <div className="SPA test">
            <main className='Content'>
                <Info
                    profile={props.profile}
                    updateUserStatus={props.updateUserStatus}
                    status={props.status}
                />
                <PostsContainer />
            </main>
        </div>
    );
}

export default Profile;