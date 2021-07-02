import React, { useEffect, useState} from 'react'
import Selector from './Selector';

const SelectAnidados = () => {

    const [provincia, setProvincia] = useState([]);
    const [municipio, setMunicipio] = useState([]);
    const [pais, setPais] = useState([]);

    const onChangeProvincia = (p)=>{

            setPais(p);
            alert(`Selecciono ${pais}`)
        }

        useEffect(() => {
        
            // helpHttp().get(url).then((res)=>{
        
            //     if(!res.err){
                    
            //         setLista(res);
            //     }else{
            //         setLista([]);
                  
            //     }
                
            // });
        
        }, [pais]);
    
    return (
        <div>
            <h2>  Select anidadoes</h2>
            <Selector url="http://localhost:50010/paices"
                tittle={'paices'}
                handleChange={(p)=>onChangeProvincia(p)}
            ></Selector> 
            
            <pre>
            {pais} - {provincia} -{municipio}
            </pre>
        </div>
    )
}

export default SelectAnidados


