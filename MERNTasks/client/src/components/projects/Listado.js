import React from 'react';
import Project from '../projects/Project';

const ListadoProyectos = () => {

    const projectList = [
        {projectName: "Tienda virtual"},
        {projectName: "celam virtual"},
        {projectName: "sport club"}
    ]

    return (
           
             <ul className="listado-proyectos" >
                 { projectList.map(p => (
                       <Project project={p}></Project>
                     ))
                    }
             </ul>
 
    );

}

export default ListadoProyectos