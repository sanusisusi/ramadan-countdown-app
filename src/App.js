import React from 'react';
import './App.css';
import Ramadan from './Ramadan';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Ramadan} />
      </Switch>
    </div>
  );
}

export default App;
