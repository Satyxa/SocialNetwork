import React from 'react'
import './Profile.css';
import Info from './Profile/Info/Info';
import Posts from './Profile/ProfilePosts/posts';
function Profile(props) {
    console.log(props.State);
    console.log('props.State');
    return (
        <div className="SPA test">
            <main className='Content'>
                <Info />
                <Posts PostData={props.PostData} />
            </main>
        </div>
    );
}

export default Profile;