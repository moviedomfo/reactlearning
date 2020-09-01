import React from 'react';
import NewProject from '../projects/newProject'
import ListadoProyectos from '../projects/Listado'



const Sidebar = () => {
    return (
 
        <aside>
          <h1>MERN <span>Tasks</span></h1>
          <NewProject/>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
                <ListadoProyectos></ListadoProyectos>
            </div>
        </aside>
  
    );

}

export default Sidebar