import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Login from '../src/login/LoginForm';
// import List from '../src/list/List';
// import ListItems from './list-items'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
// import { Route, Router } from 'react-router';
import Routes from './routes/Routes';

library.add(faTrash)

class App extends React.Component {
  
 render(){
  return (
    <div className="App">
      <Routes/>
    </div>
  );
 }
}


export default App;