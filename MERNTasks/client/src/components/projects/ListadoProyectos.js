import React,{useContext,useEffect} from 'react';
import Project from './Project';
import proyectoContext from '../../context/proyectos/proyectoContext'; 



const ListadoProyectos = () => {


    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {projectList,obtenerProyectos} = proyectosContext;

    //1) Esto se ejecuta antes que 2
    // useEfect vendrian a ser como los eventos esto ocurre al inicializar una sola vez
    //Obtiene poryectos cuando carga el componente
    useEffect(()=>{
        obtenerProyectos();
    },[]);

    //2) revisar si hay contenido
    if(projectList.lenght ===0) return   <p>No hay poryectos, comienza creando uno !!</p> 

   
    return (
           
             <ul className="listado-proyectos" >
                 { projectList.map(p => (
                       <Project 
                       key={p.id}
                       project={p}></Project>
                     ))
                    }
             </ul>
 
    );

}

export default ListadoProyectos