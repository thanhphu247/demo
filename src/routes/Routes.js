import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import history from './history';
import { createBrowserHistory as history} from 'history';
import Login from '../login/LoginForm';
import List from '../list/List';
// import App from '../App';

export default class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/home" component={List}/>
                </Switch>
            </BrowserRouter>
        );
    }
}