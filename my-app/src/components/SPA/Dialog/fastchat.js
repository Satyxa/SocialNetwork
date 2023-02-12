
import './fastchat.css';
import { NavLink } from 'react-router-dom'

function FastChat() {
    return (
        <div className="messenger__fast">
            <div className="messenger__fast-box">
                <div className='border'>
                    <h3 className="padding__zero font fontChTit">Открытые чаты</h3>
                </div>
                <div className="messenger__fast-items-box">
                    <NavLink to="/messenger/1" className="fontCh">Юлия Мельникова</NavLink>
                </div>
                <div className="messenger__fast-items-box">
                    <NavLink to="/messenger/2" className="fontCh">Вячеслав Украинцев</NavLink>
                </div>
            </div>

        </div>

    );
}

export default FastChat;