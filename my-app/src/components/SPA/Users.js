import './Users.css'
import DefaultUserPhoto from '../../assets/ava.jpg'
import React from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import API from '../../API/api'
// className='users-change-statusFriendly'
const Users = (props) => {
    let pageQuantity = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pageQuantity; i++) {
        pages.push(i)
    }
    console.log(props.followingInProgress);


    return <div>
        <section className="users">
            <div className="flexbox">
                <div className='users-box'>
                    <div className='center'>
                        <h2 className='font friend'>Друзей: {props.users.length}</h2>
                        <input type="search" className="friendSearch" placeholder="friendSearch" />
                        <div className='pzpz'>
                            <div className='users_pages'>
                                {
                                    pages.map(p => {
                                        return (

                                            <span
                                                className={props.currentPage === p ?
                                                    'font selectedPage choosePage' : 'font choosePage'
                                                }
                                                onClick={(e) => { props.pageChanged(p) }}>{p}|</span>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        {
                            props.users.map(u => {


                                return (
                                    <>

                                        <div className='users-list'>
                                            <div className='user-card'>

                                                <div className='users-avatar-box'>
                                                    <NavLink to={'/profile/' + u.id}>
                                                        <img className='users-avatar' src={u.photos.small != null ? u.photos.small : DefaultUserPhoto} width='100' height='95' />
                                                    </NavLink>
                                                </div>
                                                <div className='ui-bll-box'>
                                                    <div className='users-info-box'>
                                                        <span className='users-name'>{u.name}</span>
                                                        {/* <p className='users-country-town'>{u.country} - {u.town}</p>
                                                        <p className='users-education'>{u.education}</p>
                                                        <p className='users-status'>{u.status}</p> */}
                                                    </div>

                                                    <div className='users-button-box'>
                                                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                            props.unFollowing(u.id)

                                                        }}>Удалить из друзей</button>
                                                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                                                props.following(u.id)

                                                            }}>Добавить в друзья</button>}
                                                        <button className='users-writeMessage'>Написать сообщение</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </>
                                )
                            })
                        }
                        <div className='users-showmore-box'>
                            <button className='users-showmore'>Show more</button>
                        </div>
                    </div>
                </div>
                <div className='users-sort'></div>
            </div>
        </section>
    </div >
}




export default Users