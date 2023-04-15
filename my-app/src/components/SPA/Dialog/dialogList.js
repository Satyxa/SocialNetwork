import React from 'react';
import './dialogList.css';
import { NavLink, Navigate } from 'react-router-dom';

const DialogItem = (props) => {
    let path = '/messenger/' + props.id
    return (
        <div>
            <NavLink
                to={path}
                className="messenger__element">
                <div
                    className="messenger__element-content">
                    <img
                        className="messenger__info-ava"
                        src={props.imgId}
                        width="60"
                        height="60" />
                    <div
                        className="messenger__element-inscription">
                        <a
                            className="padding-for-name">{props.name}</a>
                        <p
                            className="heightauto">{props.message}</p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

function DialogList(props) {
    console.log("dialog list props");
    console.log(props.Data);
    let dialogElement = props.Data.map((d) => {
        return <DialogItem
            imgId={d.imgId}
            id={d.id}
            name={d.name}
            message={d.message} />
    })
    return (
        <div
            className="messenger__list">
            {dialogElement}
        </div>

    );
}

export default DialogList;