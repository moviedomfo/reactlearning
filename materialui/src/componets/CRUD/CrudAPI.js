import React, { useEffect, useState } from 'react';
import { CrudForm } from './CrudForm.js';
import { CrudTable } from './CrudTable.js';
import {helpHttp} from './../helpers/helpHttp'
import {Message} from './../Message.js';
import {Loader} from './../Loader.js';

export const CrudAPI = () => {

const [db,setDb] = useState([]);
const [currentData,setCurrentData] = useState(null);
const [isLoading,setIsLoading] = useState(false);
const [error,setError] = useState(null);

const api = helpHttp();
let url = "http://localhost:50010/products";

useEffect(() => {
    setIsLoading(true);
    api.get(url).then((res)=>{
        //const data = JSON.parse(res);
        if(res.OK){
            setDb([...db,...res]);
            setError(null);
        }else{
            setDb([]);
            setError(res);
        }
        setIsLoading(false);
    });

}, []);

const createData = ()=>{};
const updateData = ()=>{};
const deleteData = ()=>{};

    return (

        <div>
         <h2>  Crud Api Helados </h2>
         
         <CrudForm 
            dataToEdit = {currentData}
            setCurrentData={setCurrentData}
            createData={createData} 
            updateData={updateData}
            />
         
        {isLoading && <Loader/>} 
        {error &&  <Message msg = {"pepellllllll"}/>} 
        {db && <CrudTable 
            products={db} 
            setCurrentData={setCurrentData}
            deleteData={deleteData}
       
         />}
        
        </div>
    )
}
