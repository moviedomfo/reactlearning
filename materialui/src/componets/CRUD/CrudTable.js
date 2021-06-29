import React from 'react';
import { CrudTableRow } from './CrudTableRow';

export const CrudTable = ({products}) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Origen</th>
                    <th>Acciones</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {products.lenght === 0 ? 
                    
                    (
                        <tr>
                               <td colSpan="3">Sin datos
                               </td>
                        </tr>
                    ):
                    (
                        products.map((e) =>  <CrudTableRow key={e.id} element={e}></CrudTableRow>)                            
                       
                    )}
                </tbody>
            </table>
        </div>
    );
}
