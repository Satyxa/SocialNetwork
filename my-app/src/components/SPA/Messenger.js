import React from 'react'
import './Messenger.css';
import DialogList from "./Dialog/dialogList";
import FastChat from './Dialog/fastchat';
import Id1_container from './Dialog/DialogsStorage/Id1_container';
import Id2 from './Dialog/DialogsStorage/Id2';
import { Routes, Route } from "react-router-dom";
import DialogListContainer from './Dialog/dialogList_container';

function Messenger(props) {
    // console.log('Messenger props AAAAAAAAAAAAAAA');
    // console.log(props);

    return (
        <div className="SPA test">
            <main className='Messenger'>

                <Routes>
                    <Route
                        path="/"
                        element={<DialogListContainer />} />
                    <Route
                        path="/1"
                        element={<Id1_container />} />
                    <Route
                        path="/2"
                        element={<Id2 />} />
                </Routes>
                <FastChat />
            </main>
        </div>
    );
}

export default Messenger;