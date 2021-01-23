import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    ADD_PROYECTO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO, 
    VALIDAR_FORMULARIO
} from '../../types'

//Es un reemplazo de redux sin agregfar nada 
// lo único que hace Reducer es cambiar el state

export default (state,action) => {

    switch (action.type) {
        //aqui es donde se mapean con el ProyectoState
        case  FORMULARIO_PROYECTO:
            return{
                 //tomamos copuia del state con todo y cambiamos el valor de formulario solamente
                ...state,formulario : true
            }
        case OBTENER_PROYECTOS:
                return{
                    ...state, 
                    projectList: action.payload
                }
         case ADD_PROYECTO:
                    return{
                        ...state, 
                        projectList: [...state.projectList,action.payload],
                        formulario :false,
                        errorformulario :false,
                    }
        case PROYECTO_ACTUAL:
                return{
                         ...state, 
                         project: state.projectList.filter(p=> p.id === action.payload)
                            
                        }
        case ELIMINAR_PROYECTO:
               return{
                   ...state, 
                   projectList: state.projectList.filter(p=> p.id !== action.payload),//traer todos menos el que quiero eliminar
                   project:null
                   
               }
    case VALIDAR_FORMULARIO:
        return{
            ...state,
            errorformulario:true,
        }

        default:
            return state;
    }
}