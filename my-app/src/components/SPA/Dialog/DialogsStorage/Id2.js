import React from 'react'
import './../../Messenger.css';

const Message = (props) => {
    return (
        <div className="message-box">
            <div className="message__content">
                <img className="messenger__info-ava" src="https://avatars.githubusercontent.com/u/106112109?v=4" width="45" height="45" />
                <div className="messenger__element-inscription">
                    <a className="padding-for-name">Вячеслав Украинцев</a>
                    <p className="heightauto">{props.message}</p>
                </div>
            </div>
        </div>
    )
}




function Id2(props) {

    let MessagesElement = props.State.MessageDataId2.map((d) => {
        return <Message id={d.id} message={d.message} />
    })
    return (
        <div className="dialog">
            <div className="window__message-companion">
                <h3 className="font companion">Вячеслав Украинцев</h3>
                <p className="online__in__dialog">Был в сети 15 минут назад</p>
            </div>
            <div className="window__message">
                {MessagesElement}

            </div>
            <div className="message__write">
                <div className="message__write-box">
                    <div className="message__write-content">
                        <input placeholder="Write" className="message__write-input" />
                        <button className="message__write-button font">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Id2;