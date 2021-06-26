import React from 'react';

export const CrudTableRow = ({element}) => {

  const onEditarHandle = (element)=>{

  }
  
const onEmiminarHandle = (element)=>{
  //let res = window.confirm('eliminar ' + element.name + " ?") ;
    
  }
  
    return (
      
            <tr>
                <td>{element.name}</td>
                 <td>{element.Origen}</td>
                 <td>
                 <button onClick={onEditarHandle}>Editar</button>
                 <button onClick={onEmiminarHandle}>Eliminar</button>
              </td>
            </tr>
            
          
       
    )
}
