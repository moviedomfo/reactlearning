import React,{useContext} from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';

const Project = ({project}) => {

    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // obtener la función del context de tarea
    //const tareasContext = useContext(tareaContext);
    //const { obtenerTareas } = tareasContext;

    
    // Función para agregar el proyecto actual
    const seleccionarProyecto = id => {
        
        proyectoActual(id); // Fijar un proyecto actual
        //obtenerTareas(id); // Filtrar las tareas cuando se de click
    }
        return (
            <li>
                <button  
                    type="button"
                    className="btn btn-blank"
                    onClick={ () => seleccionarProyecto(project.id) }>
                    {project.projectName} 
                </button>
            </li>
    );

}

export default Project;