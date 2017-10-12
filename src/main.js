import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/main.less';

import App from './component/App';

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

const store = createStore(markers);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
