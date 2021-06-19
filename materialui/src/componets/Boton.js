import React, { useState } from 'react';
import { Button } from '@material-ui/core';

// const ResultadoDiv = styled.div`
//     color: #FFF;
//     font-family: Arial, Helvetica, sans-serif;
// `;

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const  Boton =  ({visible})  => {
    
    const [state, setState] = useState(visible);
    
    console.log(visible);
     
    return (
         <>
       
            <Button variant="text" color="primary" visible={visible}>
                     Botonaso de prueba
            </Button>
        </> 
    );

};
 export default  Boton;
    
