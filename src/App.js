import React, { Fragment,useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/productos';

import Carrito from './components/carrito';
function App() {

// var products = [
  // {id:1000,name:"manzanas"},
  // {id:1050,name:"peras"},
  // {id:1400,name:"bananas"}
// ];

  const [productLis,setProduct] = useState(
    [
      {id:1000,name:"manzanas"},
      {id:1050,name:"peras"},
      {id:1400,name:"bananas"}
    ]
  );
  
  const [carrito,agregarProducto] =  useState([]);



  return (
    <div className="App">

      <h1>Seleccion de productos</h1>
      <Fragment>
        
        <ProductList 
          products={productLis}
          carrito = {carrito}
          agregarProducto = {agregarProducto}
        ></ProductList>

       <Carrito carrito={carrito}></Carrito>
        <Footer companyName='Pelsoft'/>

        
      </Fragment>

    </div>
     
  );
}

export default App;
