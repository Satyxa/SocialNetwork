import React from 'react'
import './Profile.css';
import Info from './Profile/Info/Info';
import Posts from './Profile/ProfilePosts/posts';
function Profile(props) {
    console.log('Profile props');
    console.log(props.PostData);
    console.log('Profile props');
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