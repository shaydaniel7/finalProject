import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// provider will keep track of the store
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// setup the redux // 
const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));