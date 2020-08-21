import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {login} from './components/auth/login'
import {NuevaCuenta} from './components/auth/NuevaCuenta'
import {Projects} from './components/projects/Projects'


function App() {
  return (
      <h1>MERN Tasks</h1>
      <Router>
          <Switch>
              <Router exact path="/" component={Login}> </Router>
              <Router exact path="/nueva" component={NuevaCuenta} />
              <Router exact path="/projects" component={Projects} />
          </Switch> 
      </Router>
  );
}

export default App;
