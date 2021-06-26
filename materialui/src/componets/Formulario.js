import React, { useState, useEffect, Fragment } from 'react'

const  Formulario =  ()  => {

const [form, setForm] = useState({sexo: true});

//  useEffect(() => {
//     setForm(
//         {
//          ...form ,
//             sexo: true
//         });
// }, []);


//     useEffect(() => {
//             alert('modificado');
// }, [form]);

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
    setForm({ ...form , 
        [e.target.name]:e.target.checked
    });
}

const handleOptions = (e) =>{

    // destructuramos propiedad e.target.name == value
    //sertia como form.nombre = e.target.value;
    setForm({ ...form , 
        [e.target.name]:e.target.value
    });
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
             
               <label htmlFor="nombre" >Nombre</label>
               <input type="text" id="nombre" 
                name = "nombre"
                value={form.nombre}
                onChange={handleInput}></input>

               <label  htmlFor="apellido" >Apellido</label>
               <input type="text" 
                id="apellido" 
                name = "apellido" 
                value={form.apellido}
                
               onChange={handleInput}></input>


            <label  htmlFor="masculino" >Hombre</label>
               <input type="radio" 
                id="masculino" 
                name = "sexo" 
                value = {form.sexo}
                defaultChecked
               onChange={handleChecked}></input>

            <label  htmlFor="femenino" >Mujer</label>
            <input type="radio" 
                id="femenino" 
                name = "sexo" 
                value = {form.sexo}
               onChange={handleChecked}></input>
               <button type="submit" >Aceptar</button>



            <p>Selecciona tu lenguaje</p>
            <select name="lenguaje" onChange = {handleOptions} defaultValue= "js">
                <option value='' >---</option>
                <option value='cs' >c#</option>
                <option value='pt'>phyton</option>
                <option value='js' defaultValue>java script</option>
                <option value='php'>php</option>
            </select>
           </form>
           <label htmlFor="aceptaTerminos">Aceptar terminops</label>
            <input 
                type="checkbox"  
                id="aceptarTerminos"
                name="aceptaTerminos"
                value = {form.aceptaTerminos}
                onChange={handleChecked}></input>
       </>
   )

}

export default Formulario;