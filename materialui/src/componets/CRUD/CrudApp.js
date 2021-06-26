import React, { useState } from 'react';
import { CrudForm } from './CrudForm.js';
import { CrudTable } from './CrudTable.js';
//import products from './data.js'

const products = [
    { id: 5001, name: "Lemoneto" , origen:"Italia"},
    { id: 5002, name: "Glazed" ,origen:"Italia"},
    { id: 5005, name: "Sugar"  ,origen:"Italia"},
    { id: 5007, name: "Powdered Sugar"  ,origen:"Italia"},
    { id: 5006, name: "Chocolate with Sprinkles"  ,origen:"Italia"},
    { id: 5003, name: "Chocolate" ,origen:"Italia" },
    { id: 5004, name: "Maple"  ,origen:"Italia"},
    { id: 1001, name: "Regular"  ,origen:"Italia"},
    { id: 1002, name: "Chocolate split"  ,origen:"Italia"},
    { id: 1003, name: "Blueberry"  ,origen:"Francia"},
    { id: 1004, name: "Devil's Food", origen:"Francia" }
];

export const CrudApp = () => {
const [currentData,setCurrentData] = useState(null);
const [db,setDb] = useState(products);
    
const createData = ()=>{};
const updateData = ()=>{};
const deleteData = ()=>{};

    return (

        <div>
         <h2>  Crud Helados </h2>
         
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
