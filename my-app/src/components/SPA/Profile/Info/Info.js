import './Info.css';

function Info() {
    return (
        <div className="profile__info">
            <img className="img__profile" src="https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_132037_2560x1024.jpg" alt="wefwef" />
            <div className="width__padding">
                <div className="profile__box">
                    <div className="profile__info-box">
                        <img className="profile__info-ava" src="https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album" width="200" height="200px" />
                        <div className="profile__info-generally">
                            <h1 className="profile__info-title font">Юлия Мельникова</h1>
                            <h2 className="profile__info-subtitle font">My life my rules</h2>
                        </div>
                    </div>
                </div>
                <div className="profile__secondary__info-box">
                    <div className="profile__info-secondary">
                        <p className="info-secondary font">Moscow</p><p className="info-secondary font">25.10.04</p><p className="info-secondary font">Woman</p><p className="info-secondary font">Helisexual</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;