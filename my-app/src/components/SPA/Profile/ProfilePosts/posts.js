import './posts.css';
import NewPost from './NewPost/NewPost'

function Posts(props) {
    let PostElement = props.PostData.map(p => {
        return <NewPost id={p.id} message={p.message} likesCount={p.likesCount} dislikesCount={p.dislikesCount} />
    })

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
                {PostElement}
            </div></>
    );
}

export default Posts;