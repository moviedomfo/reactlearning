import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import {TAREAS_PROYECTO} from '../../types';

//Estado general del poryecto
//Ventaja: Evita andar pasando props por todos los componentes
const TareaState = props =>{

        const initialState = {
            tareas : [
                {id : 1 ,nombre:'diseño 1.0',estado : true,projectId:1},
                {id : 2 ,nombre:'Dashboar Gestor Epiron 2',estado : false,projectId:1},
                {id : 3 ,nombre:'Whatsapp epiron APIs',estado : false,projectId:2},
                {id : 4 ,nombre:'API BOT ',estado : true,projectId:2},
                {id : 5 ,nombre:'diseño de interfaz  ',estado : false,projectId:3},
                {id : 6 ,nombre:'Requerimientos  ',estado : true,projectId:3},
            ],
            tareasProyecto  :[]
            
        }

        //dispatch p/ejecutar las acciones Es igual a cuando usamos un useState array destructuring
        const [state, dispatch] = useReducer(TareaReducer, initialState)
        

    //GET PROJECT TASCK
    const obtenerTareas = (projectId) => {
        //aqui entra en juego el dispatch que evalua el swith
        dispatch({
                    type : TAREAS_PROYECTO,
                    payload: projectId
            })
        }

         return(
             //State Inicial
             <TareaContext.Provider
                value={{ 
                    tareas :state.tareas,
                    tareasProyecto : state.tareasProyecto,
                    obtenerTareas
                    //obtenerListado
                }}
                >
                    {props.children}
             </TareaContext.Provider>
         )
}   


export default TareaState;