
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Profile from './components/SPA/Profile'
import './App.css';
import React from 'react';
import Messenger from './components/SPA/Messenger'


import { BrowserRouter, Routes, Route } from "react-router-dom";

// Data={props.State.MessengerData.Data}
//                 MessageDataId1={props.State.MessengerData.MessengerWindow.MessageDataId1}
//                 MessageDataId2={props.State.MessengerData.MessengerWindow.MessageDataId2}

function App(props) {
  console.log('App props');
  console.log(props.State);
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element=
              {<Profile
                PostData={props.State.ProfileData.Posts.PostData} />} />
            <Route path="/profile" element=
              {<Profile
                PostData={props.State.ProfileData.Posts.PostData} />} />
            <Route path="/messenger/*" element=
              {<Messenger DataForMessage={props.State.MessengerData} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
