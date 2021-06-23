
import React from 'react'

const Pokemon =({name,avatar})=>{

    return    (
        <figure>
                <img src={avatar} alt= {name} />
                <p>{name}</p>
        </figure>
    )

} 

export default  Pokemon;