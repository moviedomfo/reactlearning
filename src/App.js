import React, { useEffect,useState } from 'react';

import styled from '@emotion/styled';
import axios from 'axios';
import imagen from './cryptomonedas.png';
import Cotizador from './components/cotizador/Cotizador';
import Formulario  from './components/cotizador/Formulario';
import Spinner from './components/cotizador/Spinner';


const Contenedor = styled.div`
   max-with:900px;
   margin: 0 auto;
   @media (min-width:pp2px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
   }
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;
function App() {

// var products = [
  // {id:1000,name:"manzanas"},
  // {id:1050,name:"peras"},
  // {id:1400,name:"bananas"}
// ];
  //old code
  const [productLis,setProduct] = useState(
    [
      {id:1000,name:"manzanas"},
      {id:1050,name:"peras"},
      {id:1400,name:"bananas"}
    ]
  );
  //old code
  const [carrito,agregarProducto] =  useState([]);

  function App() {
    useEffect( () => {

      const cotizarCriptomoneda = async () => {
          // evitamos la ejecución la primera vez
          if(moneda === '') return;

          // consultar la api para obtener la cotizacion
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

          const resultado = await axios.get(url);

          // mostrar el spinner
          guardarCargando(true);

          // ocultar el spinner y mostrar el resultado
          setTimeout(() => {

            // cambiar el estado de cargando
            guardarCargando(false);

            // guardar cotizacion
            guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda] );
          }, 3000);

          
      }
      cotizarCriptomoneda();
  }, [moneda, criptomoneda]);

  // Mostrar spinner o resultado
  const componente = (cargando) ? <Spinner /> :  <Cotizador  resultado={resultado} />


  }

  return (
      <Contenedor>
        <div>
          <Imagen 
            src={imagen}
            alt="imagen cripto"
          />
        </div>
        <div>
            <Heading>Cotiza Criptomonedas al Instante</Heading>

            <Formulario 
              guardarMoneda={guardarMoneda}
              guardarCriptomoneda={guardarCriptomoneda}
            />

            {componente}
            
        </div>
    </Contenedor>
  );


     

}

export default App;
