import React, { Fragment } from 'react';
import uuid from 'uuid/dist/v4';
import PropTypes from 'prop-types';

function Product({product,carrito,agregarProducto}) {

   
    const selectPrduct = (product) =>{

        var item = carrito.filter(p=> p.id===product.id)[0];
        item.id= uuid();
        if(!item){
            console.log('agregarProducto ->' + product.name);
            //carrito.push(product);
            agregarProducto([
                //rest opperator clona un objeto
                ...carrito,
                product
            ]);
        }
    }




    
    return (
        <Fragment>
            <p>{product.name}</p> 
            <button type="button" 
                    onClick={() => selectPrduct(product)}>comprar </button>
        </Fragment>
    
    );
}
Product.propTypes = {
    agregarProducto: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    carrito: PropTypes.object.isRequired
}

export default Product

