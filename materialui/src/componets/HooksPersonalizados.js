import React, { Fragment } from 'react'
import usePelsoftFetch from '../hooks/usePelsoft';
// import {usePelsoftFetch} from '../hooks/usePelsoft';


const url = 'https:pokeapi.co/api/v2/pokemon/' ;

// par areact todos los hooks deben em pesar con hooks
export default function HooksPersonalizados () {

    

    let {data,enviada,error} = usePelsoftFetch(url);

    

    return    (
        <>
         
            <h3>
                    <p>Hooks Personalizados</p> 
            </h3>
            
            <h3>
                <mark> {JSON.stringify(error)}</mark> 
                
            </h3>
   
            <h3>
                <mark>  {enviada ? 'Enviada': 'No Enviada'} 
                </mark> 
                
            </h3>
         
            {enviada === false ? (
                    <div>Loading ..</div>
           ):(
                    <pre>
                                <code style={{whiteSpace:"pre-wrap"}}>
                                    {JSON.stringify(data)}
                                </code>    
                    </pre>
           )}


        </>
    )
}

//export default HooksPersonalizados;