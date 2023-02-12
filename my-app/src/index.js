import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from './FakeRedux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Data={Data} PostData={PostData} MessageDataId1={MessageDataId1} MessageDataId2={MessageDataId2}
  <React.StrictMode>
    <App State={State} />
  </React.StrictMode>

);

reportWebVitals();
