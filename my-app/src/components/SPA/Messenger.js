import React from 'react'
import './Messenger.css';
import DialogList from "./Dialog/dialogList";
import FastChat from './Dialog/fastchat';
import JulijaMelnikova from './Dialog/DialogsStorage/JulijaMelnikova';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Messenger() {
    return (
        <BrowserRouter>
            <div className="SPA test">
                <main className='Messenger'>
                    <Routes>
                        <Route path="/messenger" element={<DialogList />} />
                        <Route path="/messenger/JulijaMelnikova" element={<JulijaMelnikova />} />
                    </Routes>
                    <FastChat />
                </main>
            </div>
        </BrowserRouter>
    );
}

export default Messenger;