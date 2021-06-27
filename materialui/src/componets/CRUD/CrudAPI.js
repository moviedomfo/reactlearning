import React, { useEffect, useState } from 'react';
import { CrudForm } from './CrudForm.js';
import { CrudTable } from './CrudTable.js';
import {helpHttp} from './../helpers/helpHttp'


export const CrudAPI = () => {

const [db,setDb] = useState([]);
const [currentData,setCurrentData] = useState(null);

const api = helpHttp();
let url = "http://localhost:50010/products";

useEffect(() => {
    api.get(url).then((res)=>{
        //const data = JSON.parse(res);
        setDb([...db,...res]);
        //console.log(res);
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
         <CrudTable 
            products={db} 
            setCurrentData={setCurrentData}
            deleteData={deleteData}
       
         />
        </div>
    )
}
