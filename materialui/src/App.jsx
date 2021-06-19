
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { Fragment } from 'react-is';
import Boton from './componets/Boton.js'

function App() {

  const [visible, setVisible] = useState(false)
  const visualizar =()=>{

      setVisible(!visible);
  }

  return (
    <Fragment>
        <div>Hola Mundo Reactivo</div>
        <Button onClick= {visualizar}>Visualizar </Button>
        <Boton visible= {visible} />
   </Fragment>
  );
}

export default App;
