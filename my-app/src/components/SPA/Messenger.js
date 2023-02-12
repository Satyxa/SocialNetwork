import React from 'react'
import './Messenger.css';
import DialogList from "./Dialog/dialogList";
import FastChat from './Dialog/fastchat';
import Id1 from './Dialog/DialogsStorage/Id1';
import Id2 from './Dialog/DialogsStorage/Id2';
import { Routes, Route } from "react-router-dom";

function Messenger(props) {
    return (
        <div className="SPA test">
            <main className='Messenger'>

                <Routes>
                    <Route path="/" element={<DialogList Data={props.State.MessengerData.Data} />} />
                    <Route path="/1" element={<Id1 MessageDataId1={props.MessageDataId1} />} />
                    <Route path="/2" element={<Id2 MessageDataId2={props.MessageDataId2} />} />
                </Routes>
                <FastChat />
            </main>
        </div>
    );
}

export default Messenger;