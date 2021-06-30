import React, { useEffect, useState } from 'react';


const initialForm ={
    id:null,
    name:'',
    origen:'',

}
export const CrudForm = ({currentData,setCurrentData,createData,updateData}) => {

  
const [form, setForm] = useState(initialForm);

// escuchar cambios en currentData
useEffect(() => {
    
    if(currentData)
        {
            setForm( currentData);
        }else{
            setForm( initialForm);
        }
}, [currentData]);

const handleInput = (e) =>{
        setForm(
            {
             ...form ,
             [e.target.name] : e.target.value
            });
    };
    
const handleOptions = (e) =>{

    setForm({ ...form , 
        [e.target.name]:e.target.value
    });
}

const handleSubmit = (e) =>{
  e.preventDefault();

  if(!form.name && !form.origen){
      alert('Faltan valores requeridos');
      return;
  }


  if(form.id === null){
        createData(form);
  }else
  {
      updateData(form);
  }
  // limpiamos el formulario
  handleReset();

}
const handleReset = (e) =>{
    setForm(initialForm);

    // reseteo
    setCurrentData(null);
}

    return (
        <>
        <h2>Formulario de Altas Helados</h2>
        <form onSubmit={handleSubmit} >
          
            <label htmlFor="name" >Nombre</label>
            <input type="text" id="nombre" 
             name = "name"
             value={form.name}
             onChange={handleInput}></input>
         <p>Selecciona Origen</p>
         <select name="origen" onChange = {handleOptions} defaultValue= "Francia">
             <option value='' >---</option>
             <option value='Italia' >Italia</option>
             <option value='Francia'>Francia</option>
             <option value='Ungria' defaultValue>Ungria</option>
             
         </select>

         <input type="submit" value= "Aceptar"></input>
         <input type="reset"   onSubmit={handleReset} value="Limpiar"></input>
        </form>
 
    </>
    )
}
