import React, {useReducer} from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {FORMULARIO_PROYECTO, OBTENER_PROYECTOS} from '../../types';



//Estado general del poryecto
//Ventaja: Evita andar pasando props por todos los componentes
const ProyectoState = props =>{

    const projectList = [
        {id:1, projectName: "Tienda virtual"},
        {id:2,projectName: "celam virtual"},
        {id:3,projectName: "sport club"}
    ]


        const initialState = {
            projectList : [],
            formulario : false
        }

        //dispatch p/ejecutar las acciones Es igual a cuando usamos un useState array destructuring
        const [state, dispatch] = useReducer(proyectoReducer, initialState)

         //Series de funciones CRUD

         //Funcion que va a nmostrar el formulario
        const mostrarFormulario = () => {
         
                //aqui entra en juego el dispatch que evalua el swith
                dispatch({
                            type : FORMULARIO_PROYECTO
                    })
            }

        // obtener los proyectos y este si tomara un parametro 'proyectos'
        //Siempre lo que tome la funcion como parametro es lo qu eva aser el payload
         const obtenerProyectos = () => {
                //aqui entra en juego el dispatch que evalua el swith
                dispatch({
                            type : OBTENER_PROYECTOS,
                            payload : projectList
                    })
            }

         return(
             //State Inicial
             <proyectoContext.Provider
                value={{ 
                    formulario : state.formulario,
                    projectList :state.projectList,
                    mostrarFormulario,
                    obtenerProyectos
                }}
                >
                    {props.children}
             </proyectoContext.Provider>
         )
}   


export default ProyectoState;