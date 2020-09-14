import React,{useContext,useEffect} from 'react';
import Project from '../projects/Project';
import proyectoContext from '../../context/proyectos/proyectoContext'; 



const ListadoProyectos = () => {


    const proyectosContext = useContext(proyectoContext);
    const {projectList,obtenerProyectos} = proyectosContext;

    //1) Esto se ejecuta antes qeu 2
    useEffect(()=>{
        obtenerProyectos();
    },[]);

    //2)
    if(projectList.lenght ===0) return null; 

   
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