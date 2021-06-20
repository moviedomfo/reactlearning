
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react-is';
import Boton from './componets/Boton.js'
import PokemonHooks from './componets/PokemonHooks.js';

function App() {

  const [visible, setVisible] = useState(false)
  return (
    <Fragment>
        <div>Hola Mundo Reactivo</div>
        <Button onClick= { ()=> setVisible(!visible)}>Visualizar </Button>
        <Boton visible= {visible} />

        <br>
        </br>
         <PokemonHooks/>
   </Fragment>
  );
}

export default App;
