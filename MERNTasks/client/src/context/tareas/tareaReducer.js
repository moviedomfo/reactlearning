import {TAREAS_PROYECTO} from '../../types'

//Es un reemplazo de redux sin agregfar nada 
// lo único que hace Reducer es cambiar el state

export default (state,action) => {

    switch (action.type) {
        //aqui es donde se mapean con el tareaState
        case  TAREAS_PROYECTO:
            return{

                    ...state,
                    tareasProyecto: state.tareas.filter(t=> t.projectId === action.payload)
            }
        default:
            return state;
    }
}