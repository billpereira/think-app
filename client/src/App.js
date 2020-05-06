import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import GroupsPage from './components/GroupsPage'
import './App.css'


function App() {
  return (
    <Router>
      <Route exact path='/' component={LoginPage}/>
      <Route exact path='/groups' component={GroupsPage}/>
    </Router>
  );
}

export default App;
