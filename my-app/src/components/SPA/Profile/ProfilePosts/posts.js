import './posts.css';
import NewPost from './NewPost/NewPost'

function Posts() {

    return (
        <><div className="post">
            <div className="post__box ">
                <h3 className="post__title font">Posts</h3>
                <input className="post__write" placeholder="Озвучьте ваши мысли"></input>
                <div className="right">
                    <button className="post__add font">Выложить</button>
                </div>
            </div>
        </div>
            <div className="posts-box ">
                <NewPost message="Я ЗДЕСЬ" likesCount="12" dislikesCount="9" />
                <NewPost message="УРА" likesCount="23" dislikesCount="45" />
            </div></>
    );
}

export default Posts;