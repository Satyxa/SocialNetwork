import React from 'react'
import './../../Messenger.css';

const Message = (props) => {
    return (
        <div
            className="message-box">
            <div
                className="message__content">
                <img
                    className="messenger__info-ava"
                    src="https://sun9-west.userapi.com/sun9-56/s/v1/ig2/Eb5u1nzOQwdMZxRHx57lKDcq8P5bm3_aQONFwbViIMeWTCPfZtu5LnTJ8VFbpK_Is9DtiAf6yZyM4jwNL9Qjmhws.jpg?size=1080x1080&quality=95&type=album" width="45" height="45" />
                <div
                    className="messenger__element-inscription">
                    <a
                        className="padding-for-name">Юлия мельникова</a>
                    <p
                        className="heightauto">{props.message}</p>
                </div>
            </div>
        </div>
    )
}

function Id1(props) {
    const testRef = React.createRef()

    let messageChanged = () => {
        let text = testRef.current.value;
        props.addMessage(text)
    }

    const observeChange = () => {
        const text = testRef.current.value
        props.MessageTextWasChanged(text)
    }

    let MessagesElement = props.MessageDataId1.map((d) => {
        return <Message id={d.id} message={d.message} />
    })

    return (
        <div
            className="dialog">
            <div
                className="window__message-companion">
                <h3
                    className="font companion">Вячеслав Украинцев</h3>
                <p
                    className="online__in__dialog">Был в сети 15 минут назад</p>
            </div>
            <div
                className="window__message">
                {MessagesElement}
            </div>
            <div
                className="message__write">
                <div
                    className="message__write-box">
                    <div
                        className="message__write-content">
                        <textarea
                            ref={testRef}
                            placeholder="Write"
                            className="message__write-input"
                            onChange={observeChange}
                            value={props.newMessageText} />
                        <button
                            onClick={messageChanged}
                            className="message__write-button font">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Id1;