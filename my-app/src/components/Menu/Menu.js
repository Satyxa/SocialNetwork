import React from 'react';
import './Menu.css';
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div className="Menu test">
            <nav className='sideMenu'>
                <NavLink to='/profile' className="link">Моя страница</NavLink>
                <NavLink to='/messenger' className="link">Мессенджер</NavLink>
                <NavLink to='/users' className="link">Друзья</NavLink>
                <NavLink to='/messenger' className="link">Сообщества</NavLink>
                <NavLink to='/messenger' className="link">Новости</NavLink>
                <NavLink to='/messenger' className="link">Стикеры</NavLink>
                <NavLink to='/messenger' className="link">Видео</NavLink>
                <NavLink to='/messenger' className="link">Игры</NavLink>
                <NavLink to='/messenger' className="link">Музыка</NavLink>
                <NavLink to='/messenger' className="link">Стикеры</NavLink>
                <NavLink to='/messenger' className="link">Видео</NavLink>

                <hr className="hr-for-link"></hr>
                <NavLink to='/messenger' className="link">Новости</NavLink>
                <NavLink to='/messenger' className="link">Стикеры</NavLink>
                <NavLink to='/messenger' className="link">Видео</NavLink>
                <NavLink to='/messenger' className="link">Игры</NavLink>
                <hr className="hr-for-link"></hr>
                <NavLink to='/messenger' className="link">Настройки</NavLink>
            </nav>
        </div>
    );
}

export default Menu;