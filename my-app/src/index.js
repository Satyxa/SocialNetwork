import store from './FakeRedux/redux_store'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
const rerenderEntireTree = (State) => {
    // console.log('dis');
    // console.log(store);
    // debugger

    // store={store}
    //                 State={store.getState()}
    //                 dispatch={store.dispatch.bind(store)}
    //                 newMessageText={store.getState().MessengerData.MessengerWindow.newMessageText} 

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>

    );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
})

reportWebVitals();
