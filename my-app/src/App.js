
import HeaderContainer from './components/Header/HeaderContainer'
import Menu from './components/Menu/Menu'
import './App.css';
import React from 'react';
import MessengerContainer from './components/SPA/MessengerContainer'
import UsersContainer from './components/SPA/UsersContainer';
import ProfileContainer from './components/SPA/ProfileContainer';
import Login from './components/SPA/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Data={props.State.MessengerData.Data}
//                 MessageDataId1={props.State.MessengerData.MessengerWindow.MessageDataId1}
//                 MessageDataId2={props.State.MessengerData.MessengerWindow.MessageDataId2}

function App(props) {
  // console.log('App');
  // console.log(props);

  return (

    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <HeaderContainer />
          <Menu />
          <Routes>
            <Route path="/" element=
              {<ProfileContainer isMain={true} />} />
            <Route path="/profile/:userId?" element=
              {<ProfileContainer />} />
            <Route path="/messenger/*" element=
              {<MessengerContainer />} />
            <Route path="/users/*" element=
              {<UsersContainer />} />
            <Route path="/login" element=
              {<Login />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
