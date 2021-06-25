import React, { useState, useEffect, Fragment } from 'react'

const  Formulario =  ()  => {

const [form, setForm] = useState({});

    useEffect(() => {
            alert('modificado');
}, [form]);

const handleInput = (e) =>{

    // destructuramos propiedad e.target.name == value
    //sertia como form.nombre = e.target.value;
    setForm(
        {
         ...form ,
         [e.target.name] : e.target.value
        });
};

const handleChecked = (e) =>{

    // destructuramos propiedad e.target.name == value
    //sertia como form.nombre = e.target.value;
    setForm( ...form , [e.target.name,e.target.checked]);
}

const handleSubmit = (e) =>{
    
    // e.peventDefault();
    
    let res = window.confirm("Desea confirmar el alta ?");
    if(res){
        
        alert("Creado" + JSON.stringify(form));
    }

}

   return(
       <>
              <h2>Formulario de Altas Persona</h2>
           <form onSubmit={handleSubmit} >
             
               <label>Nombre</label>
               <input type="text" id="nombre" name = "nombre" onChange={handleInput}></input>

               <label>Apellido</label>
               <input type="text" id="apellido" name = "apellido" onChange={handleInput}></input>

               <button type="submit" >Aceptar</button>
           </form>
           
          
       </>
   )

}

export default Formulario;