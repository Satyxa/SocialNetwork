import React from 'react'
import './Content.css';
import Info from './Profile/Info/Info';
import Posts from './Profile/ProfilePosts/posts';
function Content() {
    return (
        <div className="SPA test">
            <main className='Content'>
                <Info />
                <Posts />
            </main>
        </div>
    );
}

export default Content;