
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import Content from './components/SPA/Content'
import './App.css';
import React from 'react';
import Messenger from './components/SPA/Messenger'

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='app-wrapper'>
          <Header />
          <Menu />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/profile" element={<Content />} />
            <Route path="/messenger" element={<Messenger />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
