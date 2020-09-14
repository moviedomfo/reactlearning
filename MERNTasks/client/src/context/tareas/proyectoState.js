import React, {useReducer} from 'react';
import tareaContext from './tareaContext';
import tareaReducer from './tareaReducer';
import {FORMULARIO_PROYECTO} from '../../types';

//Estado general del poryecto
//Ventaja: Evita andar pasando props por todos los componentes
const TareaState = props =>{
        const initialState = {
            projectList : [
                {id:1, projectName: "Tienda virtual"},
                {id:2,projectName: "celam virtual"},
                {id:3,projectName: "sport club"}
            ],
            formulario : false
        }

        //dispatch p/ejecutar las acciones Es igual a cuando usamos un useState array destructuring
        const [state, dispatch] = useReducer(tareaReducer, initialState)

         //Series de funciones CRUD

         //Funcion que va a nmostrar el formulario
        const mostrarFormulario = () => {
         
                //aqui entra en juego el dispatch que evalua el swith
                dispatch({
                            type : FORMULARIO_PROYECTO
                    })
            }

    

         return(
             //State Inicial
             <tareaContext.Provider
                value={{ 
                    formulario : state.formulario,
                    projectList :state.projectList,
                    mostrarFormulario
                    //obtenerListado
                }}
                >
                    {props.children}
             </tareaContext.Provider>
         )
}   


export default TareaState;