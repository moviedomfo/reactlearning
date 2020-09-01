import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';


//Estado general del poryecto
//Ventaja: Evita andar pasando props por todos los componentes
const ProyectoState = props =>{
        const initialState = {
            formulario :false
        }

        //dispatch p/ejecutar las acciones
        const [state, dispatch] = useReducer(proyectoReducer, initialState)

         //Series de funciones CRUD


         return(
             <proyectoContext.Provider
                value={{
                     formulario : state.formulario
                    }}
                >
                    {props.children}
             </proyectoContext.Provider>
         )
}   


export default ProyectoState