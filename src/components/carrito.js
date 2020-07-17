import React, { Fragment } from 'react';


const Carrito = ({carrito}) => {
    
    return (
        <Fragment>
        <h1>Carrito de comprass</h1>
        {carrito.map(p=> (
            <div  key={p.id}>

                 <p> {p.name}</p>
                
                  </div>
       ))}
      
       </Fragment>
    );

}

export default Carrito;

