import React, { useEffect, useState} from 'react'
import Selector from './Selector';

const SelectAnidados = () => {
    const [pais, setPais] = useState([]);
    const [provincia, setProvincia] = useState(null);
    const [municipio, setMunicipio] = useState(null);
    
    // const [parentId, setUrlProvincia] = useState({});

const onChangePais = (selectedItem)=>{

    //alert(`Selecciono ${selectedItem.name}`);
      setPais(selectedItem);
 }

const onChangeProvincia = (selectedItem)=>{

    setProvincia(selectedItem);
}
const onChangeMunicipio = (selectedItem)=>{

    setMunicipio(selectedItem);
}

// useEffect(() => {
        
//            //setProvincia(`http://localhost:50010/provincias/`);
        
//         }, [pais]);
    
    return (
        <div className="grid-1-3">
            <h2>  Select anidadoes</h2>
            <Selector url="http://localhost:50010/paices"
                tittle={'paices'}
                handleChange={(p)=>onChangePais(p)}
            ></Selector> 

             <Selector url="http://localhost:50010/provincias"
                tittle={'provincias'}
                parentId={pais ? pais.id : null}
                handleChange={(p)=>onChangeProvincia(p)}
            ></Selector> 

            
             <Selector url="http://localhost:50010/municipios"
                tittle={'municipios'}
                parentId={provincia ? provincia.id : null}
                handleChange={(p)=>onChangeMunicipio(p)}
            ></Selector>  
            {/* <pre>
                 {pais} - {provincia} -{municipio}
            </pre> */}
        </div>
    )
}

export default SelectAnidados


