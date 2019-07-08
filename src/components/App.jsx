import React from 'react';
import NavBar from './NavBar';
import Menu from './Menu';
import WineForm from './WineForm';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Menu} />
        <Route path='/newwine' component={WineForm} />
      </Switch>
    </div>
  );
}

export default App;
