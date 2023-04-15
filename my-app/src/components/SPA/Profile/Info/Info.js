import './Info.css';
import Preloader from './../../../Preloader'
import Status from './Status';
function Info(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className="profile__info">
            <img className="img__profile" src="https://images.wallpaperscraft.ru/image/single/les_tuman_derevia_132037_2560x1024.jpg" alt="wefwef" />
            <div className="width__padding">
                <div className="profile__box">
                    <div className="profile__info-box">
                        <img className="profile__info-ava" src={props.profile.photos.large ? props.profile.photos.large : 'https://i.pinimg.com/736x/53/4b/35/534b352b318223b4d0271e8ae9af9879.jpg'} width="200" height="200px" />
                        <div className="profile__info-generally">
                            <h1 className="profile__info-title font">{props.profile.fullName}</h1>
                            <Status
                                updateUserStatus={props.updateUserStatus}
                                status={props.status}
                            />
                            <h2 className="profile__info-subtitle font">{props.profile.lookingForAJobDescription}</h2>
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