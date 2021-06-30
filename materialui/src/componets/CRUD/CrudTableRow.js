import React from 'react';

export const CrudTableRow = ({element,setCurrentData,deleteData}) => {

/// en click setCurrentData se`porbaga hacia arriba

//  const onEditarHandle = (element)=>{
//     setCurrentData(element);
//   }
  
const onEmiminarHandle = (element)=>{
  //let res = window.confirm('eliminar ' + element.name + " ?") ;
//    alert(JSON.stringify(element));
    deleteData(element.id);
  }
  
    return (

            <tr>
              
                <td>{element.name}</td>
                 <td>{element.origen}</td>
                 <td>
                 {/* <button onClick={onEditarHandle}>Editar</button> */}
                 <button onClick={()=> setCurrentData(element)}>Editar</button>
                 {/* <button onClick={onEmiminarHandle(element)}>Eliminar</button> */}
                 <button onClick={()=> deleteData(element.id)}>Eliminar</button> 
              </td>
            </tr>
            
          
       
    )
}
