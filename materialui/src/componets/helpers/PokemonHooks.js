import React, { useState, useEffect, Fragment } from 'react';
import Pokemon from './Pokemon';


// Componente de Funcion : no existe this por lo que no podemos asignar o leer this.state
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

                const pokemon = {
                    id:json.id, 
                    name:json.name,
                    avatar:json.sprites.front_default,
                }

                    console.warn(pokemon.id);


                // setPokemons((pokemons) => [...pokemons,poke]);
                // spreed operator: de lo que ya tengo del Vector, copiarlo y luego le vamos a agregar el poke
                
            
                 setPokemons((pokemons)=>[...pokemons,pokemon])
                 
                 // Esto no se puede hacer por las caracteristicas de react en el que una
                 // state debe ser asignada por su handler setState
                 // pokemons = [...pokemons,pokemon];
                // setPokemons((pokemons)=>lista); // asigna solo el ultimo no sirve

                
                 // setPokemons([...pokemons,pokemon])

                
             });
        });
    });

    //setPokemons([]);
    // const callApi=()=>{
        
    // }
}, []);


   return(
       <Fragment>
           <h2>Petidiones asincronas en Hooks</h2>
           {pokemons.length === 0 ? (
                    <div>Loading ..</div>
           ):(
             pokemons.map((p) => (
                                <Pokemon key={p.id}  name={p.name} avatar={p.avatar} ></Pokemon> 
                                  )
                        ) // end map
           )}
       </Fragment>
   )

}

export default PokemonHooks;