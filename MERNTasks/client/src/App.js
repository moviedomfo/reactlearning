import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/login';
import NuevaCuenta from './components/auth/nuevaCuenta';
import Proyectos from './components/projects/Projects';
import ProyectoState from './context/proyectos/proyectoState';



function App() {
  return (

    //Hacer disponible el State en toda la apliccion 
    //Para que las diferentes props que escribimos en el state se pace a todos los componentes
   <ProyectoState>
      <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
            <Route exact path="/proyectos" component={Proyectos} />
        </Switch>
      </Router>
   </ProyectoState>

  
  );
}

export default App;
