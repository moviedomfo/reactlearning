import React ,{Fragment,useContext} from 'react'
import Tarea from '../tasks/Tarea'
import proyectoContext from '../../context/proyectos/proyectoContext';
const ListadoTareas = () => {

  const proyectosContext = useContext(proyectoContext);
  // Extaer rpoject del context. Project es un array y podemos acceder por Array destricturing o por position []
  const {project,eliminarProyecto} = proyectosContext;


  //si no hay poryectos seleccionado 
  if(!project){
    return <h2>Selecciona un proyecto</h2>
  }
    //Array destructuring para extraer el proyecto inicial. project en un array
    const [projectActual] = project;
    
  const tareasProyecto = [
    {id : 1 ,nombre:'Epiron web 1.0',estado : true},
    {id : 2 ,nombre:'Dashboar Gestor Epiron 2',estado : false},
    {id : 3 ,nombre:'Whatsapp epiron ',estado : false},
    {id : 4 ,nombre:'API BOT ',estado : true}

  ];




 //elimina proy
 const eliminarProyectoClick =()=>{
    eliminarProyecto(projectActual.id);
 }
    return (
        <Fragment>
            <h2>Proyecto : {projectActual.projectName} </h2>
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
