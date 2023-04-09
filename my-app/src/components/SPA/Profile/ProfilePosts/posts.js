import React from 'react';
import './posts.css';
import NewPost from './NewPost/NewPost'

function Posts(props) {
    let PostElement = props.posts.PostData.map(p => {
        return <NewPost
            id={p.id}
            message={p.message}
            likesCount={p.likesCount}
            dislikesCount={p.dislikesCount} />
    })

    const testRef = React.createRef()

    let addPost = () => {
        let text = testRef.current.value;
        props.onAddPost(text)
    }

    const onPostChange = () => {
        let text = testRef.current.value;
        props.updateNewPostText(text)
    }
    return (
        <><div className="post">
            <div className="post__box ">
                <h3 className="post__title font">Posts</h3>
                <textarea
                    className="post__write"
                    placeholder="Озвучьте ваши мысли"
                    ref={testRef}
                    onChange={onPostChange}
                    value={props.newPostText}

                ></textarea>
                <div
                    className="right">
                    <button
                        className="post__add font"
                        onClick={addPost}
                    >
                        Выложить
                    </button>
                </div>
            </div>
        </div>
            <div
                className="posts-box ">
                {PostElement}
            </div></>
    );
}

export default Posts;