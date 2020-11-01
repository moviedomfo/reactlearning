import React ,{Fragment,useContext} from 'react'
import Tarea from '../tasks/Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoTareas = () => {

  const tareasProyecto = [
    {id : 1 ,nombre:'Tarea 1',estado : true},
    {id : 2 ,nombre:'Tarea 2',estado : false},
    {id : 3 ,nombre:'Tarea 3',estado : false},
    {id : 4 ,nombre:'Tarea 4',estado : true}

  ];


  const proyectosContext = useContext(proyectoContext);
  //Extaer rpoject del context
  const {project} = proyectosContext;
  //si no hay poryectos seleccionado 
  if(!project){
    return <h2>Selecciona un proyecto</h2>
  }

  //Array destructuring para extraer el proyecto inicial. project en un array
  const [projectActual,eliminarProyecto] = project;

 //elimina proy
 const eliminarProyectoClick =()=>{
    eliminarProyecto(projectActual.id);
 }
    return (
        <Fragment>
            <h2>Proyecto : {projectActual.nombre} </h2>
                <ul className="listado-tareas">
                    {  
                        tareasProyecto.length === 0  
                        ? 
                        <li className="tarea"><p>Nada de tareas</p></li>
                       
                         : 
                          tareasProyecto.map(t=>(
                                     <Tarea key={t.id}  tarea={t}></Tarea>
                                ))
                          
                    }
                </ul>
                <button type="button" 
                className="btn btn-eliminar"
                onClick={ () => eliminarProyectoClick(project.id) }
                 >Eliminar Proyecto</button>
        </Fragment>
                
    );

}

export default ListadoTareas;
