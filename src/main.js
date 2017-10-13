import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import './styles/main.less';

import App from './component/App';
import About from './component/About';
import Auth from './component/Auth';

const initialState = [
    {
        lat:46.4618355,
        lang:30.7495655
    }
];

function markers(state = initialState, action) {
    switch (action.type) {
        case 'ADD_MARKER':
            return [
                ...state,
                action.obj
            ];
    }
    return state;
}



const store = createStore(combineReducers({
    markers,
    routing: routerReducer
}));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/auth" component={Auth}/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
