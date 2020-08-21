import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
      <h1>MERN Tasks</h1>
      <Router>
          <Switch>
              <Router exact path="/" component={Login}> </Router>
              <Router exact path="/" component={Login} />
              <Router exact path="/project" component={Login} />
          </Switch> 
      </Router>
  );
}

export default App;
