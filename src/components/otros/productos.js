import React, { Fragment } from 'react';

import Product from './producto'


function ProductList({products,carrito,agregarProducto}) {
    return (
        <Fragment>
         <h1>Lista Productos</h1>
         {products.map(p=> (
             <div key={p.id}>
                  <Product  
                        key= {p.id}   
                        product={p} 
                        carrito={carrito}
                        agregarProducto={agregarProducto}
                      
                  />

                 
               </div>
                   

        ))}
       
        </Fragment>
    
    )
}

export default ProductList

