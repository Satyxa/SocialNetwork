import React from 'react';
import './dialogList.css';
import { NavLink } from 'react-router-dom';
function DialogList() {
    return (
        <div className="messenger__list">
            <NavLink to="/messenger/JulijaMelnikova" className="messenger__element">
                <div className="messenger__element-content">
                    <img className="messenger__info-ava" src="https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album" width="60" height="60" />
                    <div className="messenger__element-inscription">
                        <a className="padding-for-name">Юлия мельникова</a>
                        <p className="heightauto">Message</p>
                    </div>
                </div>
            </NavLink>
            <NavLink to="/messenger/JulijaMelnikova" className="messenger__element">
                <NavLink to="/messenger/JulijaMelnikova" className="messenger__element-content">
                    <img className="messenger__info-ava" src="https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album" width="60" height="60" />
                    <div className="messenger__element-inscription">
                        <a className="padding-for-name">Вячеслав Украинцев</a>
                        <p className="heightauto">Message</p>
                    </div>
                </NavLink>
            </NavLink>
        </div>
    );
}

export default DialogList;