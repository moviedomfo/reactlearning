import React, { useState,useEffect } from 'react';
import { Button } from '@material-ui/core';
import { cleanup } from '@testing-library/react';

// const ResultadoDiv = styled.div`
//     color: #FFF;
//     font-family: Arial, Helvetica, sans-serif;
// `;

// import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const  Boton =  ({visible})  => {
    
    const [state, setState] = useState(visible);

    // con useEffect se pueden interseptar las fases de desmontaje del componente
    // Component did mount
    // Component did update
    // Component did unmount
    useEffect(() => {
        console.log('set Component did mount');
    
        // return ()=> {
        //     cleanup;
        // }
        setState(!state);
    }, [state]);

     
    return (
         <>
       
            <Button variant="text" color="primary" visible={visible}>
                     Botonaso de prueba
            </Button>
        </> 
    );

  
};

Boton.defaultProps ={
    visible: false,
}
 export default  Boton;
    
