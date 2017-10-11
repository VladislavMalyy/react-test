import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import './styles/main.less';

import App from './component/App';
import About from './component/About';
import Auth from './component/Auth';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/about" component={About}/>
            <Route path="/auth" component={Auth}/>
        </Switch>
    </BrowserRouter>,
    document.getElementById('app')
);
