import './Header.css';
import { NavLink } from 'react-router-dom';
function Header(props) {
    console.log(props);
    console.log(' console.log(props); console.log(props); console.log(props); console.log(props); console.log(props); console.log(props);');
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
                        {props.isAuth ? props.login : <NavLink to={'/login'}><div className='user__name'>Login</div></NavLink>}
                    </div>
                </div>
            </header>
        </div>
    );
}

// axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
//             this.props.setUserProfile(response.data)
//         })

export default Header;