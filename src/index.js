import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware, promiseMiddleware()))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
