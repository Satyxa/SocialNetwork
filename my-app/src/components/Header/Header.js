import './Header.css';
import { NavLink } from 'react-router-dom';
function Header(props) {

    return (
        <div className="Header test">
            <header className='cap'>
                <div className="cap__container">
                    <div className='brand__box'>
                        <h1 className="vkontakte">ВКОНТАКТЕ</h1>
                        <input type="search" className="search" placeholder="seacrh"></input>
                    </div>
                    <div className='login__box'>
                        {/* <NavLink to={'/login'}><div className='user__avatar'><img /></div></NavLink> */}
                        {props.isAuth ? <span>{props.login} <button onClick={props.logout}>logout</button></span> : <NavLink to={'/login'}><div className='user__name'>Login</div></NavLink>}
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;