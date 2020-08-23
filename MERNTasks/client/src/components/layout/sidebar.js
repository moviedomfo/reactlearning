import React from 'react';
import NewProject from '../projects/newProject'

const Sidebar = () => {
    return (
     
        <aside>
          <h1>MERN <span>Tasks</span></h1>
          <NewProject></NewProject>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
            </div>
        </aside>
         
    );

}

export default Sidebar