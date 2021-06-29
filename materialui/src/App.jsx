
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react-is';
import Boton from './componets/Boton.js'
import HooksPersonalizados from './componets/HooksPersonalizados.js';
import GridPelsoft from './componets/GridPelsoft'
import Formulario from './componets/Formulario.js';
import { CrudApp } from './componets/CRUD/CrudApp.js';
import { CrudAPI } from './componets/CRUD/CrudAPI.js';
// import PokemonAsyncHooks from './componets/PokemonAsyncHooks.js';
// import PokemonHooks from './componets/PokemonHooks.js';

function App() {

  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
    <hr/>
        <CrudAPI/>
        <hr/>
      
        {/* <CrudApp/> */}
        
        {/* <Formulario/> */}
        {/* <br></br>
        <div>Hola Mundo Reactivo</div>
        <Button onClick= { ()=> setVisible(!visible)}> Visualizar </Button>
        <Boton visible= {visible} /> */}
        
        {/* <GridPelsoft></GridPelsoft> */}
         {/* <PokemonHooks/> */}
         {/* <PokemonAsyncHooks/> */}
         {/* <HooksPersonalizados/> */}
   </Fragment>
  );
}

export default App;
