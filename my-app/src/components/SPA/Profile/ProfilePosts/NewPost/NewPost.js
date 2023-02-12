import './NewPost.css';

function NewPost(props) {
    return (

        <div className="post-body">
            <div className="posts__ava__info">
                <img className="posts__ava" src="https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album" width="100px" height="90px" />
                <div className="pj">
                    <h3 className="posts__info-title font">Юлия Мельникова</h3>
                    <p className="posts__info-subtitle font"><span>24.03.2023 21:39</span></p>
                </div>
            </div>
            <div className="box-for-post">
                <p className="post__content font">{props.message}</p>
                <div className="grade">
                    <div className="countbox">
                        <button className="like font">Like</button>
                        <p className="likesCount"> {props.likesCount} </p>
                    </div>

                    <div className="countbox">
                        <button className="dislike font">Dislike</button>
                        <p className="dislikesCount"> {props.dislikesCount}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default NewPost;