import React, { useState, useEffect, Fragment } from 'react'
import Pokemon from './Pokemon';



const  PokemonHooks =  ()  => {

const [pokemons, setPokemons] = useState([]);

useEffect(() => {

    const url = 'https:pokeapi.co/api/v2/pokemon/' ;
    fetch(url).then((res)=> res.json())
    .then((json)=>{

 
        json.results.forEach(element => {
            // segunda peticion para obtener + detalles de los pokemones
            fetch(element.url).then((res)=> res.json())
            .then((json)=>{

                const poke = {
                    id:json.id, 
                    name:json.name,
                    avatar:json.sprites.front_default,
                }

                console.log(poke);


                // setPokemons((pokemons) => [...pokemons,poke]);
                // spreed operator: de lo que ya tengo del Vector, copiarlo y luego le vamos a agregar el poke
            //       let list = [...pokemons,poke];

            //       setPokemons(list)
             });
        });
    });

    //setPokemons([]);
    // const callApi=()=>{
        
    // }
}, [pokemons]);


   return(
       <Fragment>
           <h2>Petidiones asincronas en Hooks</h2>
           {pokemons.length === 0 ? (
                    <div>Loading ..</div>
           ):(
             pokemons.map((p) => (
                                <Pokemon key={p.id}  name={p.name} avatgar={p.avatgar} ></Pokemon> 
                                  )
                        ) // end map
           )}
       </Fragment>
   )

}

export default PokemonHooks;