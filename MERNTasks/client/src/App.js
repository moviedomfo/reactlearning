import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {Login} from './components/auth/Login'
import {NuevaCuenta} from './components/auth/NuevaCuenta'
import {Projects} from './components/projects/Projects'


function App() {
  return (

      <Router>
          <Switch>
              <Router exact path="/" component={Login}/>
              <Router exact path="/nueva" component={NuevaCuenta} />
              <Router exact path="/projects" component={Projects} />
          </Switch> 
      </Router>
  );
}

export default App;
