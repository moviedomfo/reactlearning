import React from 'react'
import {usePelsoftFetch} from './../hooks/usePelsoft'
const url = 'https:pokeapi.co/api/v2/pokemon/' ;
// par areact todos los hooks deben em pesar con hooks
const  HooksPersonalizados =  ()  => {
console.log(usePelsoftFetch(url));


    return    (
        <h3>
           
                <p>Hooks Personalizados</p>
        </h3>
    )
}

export default HooksPersonalizados;