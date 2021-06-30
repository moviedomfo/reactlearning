import React, { useEffect, useState } from 'react';
import { CrudForm } from './CrudForm.js';
import { CrudTable } from './CrudTable.js';
import {helpHttp} from './../helpers/helpHttp'
import Message from './../Message.js';
import Loader from './../Loader.js';
import { v4 as uuidv4 } from 'uuid';
export const CrudAPI = () => {

const [db,setDb] = useState(null);
const [currentData,setCurrentData] = useState(null);
const [isLoading,setIsLoading] = useState(true);
const [error,setError] = useState(null);


let url = "http://localhost:50010/products";

useEffect(() => {
    setIsLoading(true);
    helpHttp().get(url).then((res)=>{

        if(!res.err){
            // setDb([...db,...res]);
            setDb(res);
            setError(null);
        }else{
            setDb([]);
            setError(res);
          
        }
        setIsLoading(false);
    });

}, [url]);

const createData = (data)=>{

 setIsLoading(true);
    
  let res = window.confirm("Desea confirmar el alta ?");
  // console.info(res);
    if(res){
        let options = {
            body: data,
            headers: { "content-type": "application/json" },
          };
      
        data.id = uuidv4();

        helpHttp().post(url,options).then((res)=>{

            if(!res.err){
                setDb([...db,res]);
                alert("Creado" + JSON.stringify(data));
            }else{
                setError(res);
              
            }
            setIsLoading(false);
            
        });
        
    }

    

};

const updateData = (data)=>{

    setIsLoading(true);

    let endpoint = `${url}/${data.id}`;
    let options = {
        body: data,
        headers: { "content-type": "application/json" },
      };
  
    // Esta llamada a api la actualiza en la bd server
    helpHttp().put(endpoint,options).then((res)=>{

        if(!res.err){

            // Esto actualiza la db en memoria del form
            let newData = db.map((item)=>(item.id===data.id ? data:item))
            setDb(newData);
            alert("Actualizado" + JSON.stringify(data));
        }else{
            setError(res);
        }
        setIsLoading(false);
        
    });
    
};


const deleteData = (id)=>{

     const res = window.confirm('Quiere eliminar' + id);
     if(!res)
        return;


    setIsLoading(true);

    let endpoint = `${url}/${id}`;
    let options = {
        headers: { "content-type": "application/json" },
      };
  
    // Esta llamada a api la actualiza en la bd server
    helpHttp().del(endpoint,options).then((res)=>{

        if(!res.err){

            // filtramos <> del id y queda nuestro nuevo array sion este elemento
            let newData = db.filter( el => el.id !== id ); 
            
            setDb(newData);
            
        }else{
            setError(res);
        }
        setIsLoading(false);
        
    });
    
};



return (

        <div>
         <h2>  Crud Api Helados </h2>
         
         <CrudForm 
            currentData = {currentData}
            setCurrentData={setCurrentData}
            createData={createData} 
            updateData={updateData}
            />
         
        {isLoading && <Loader/>} 
        {error && <Message msg = {error.message} isError={true}/>} 

        {db && <CrudTable 
            products={db} 
            setCurrentData={setCurrentData}
            deleteData={deleteData}
       
         />}
        
        </div>
    )
}
