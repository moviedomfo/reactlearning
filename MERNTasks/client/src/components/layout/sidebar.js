import React from 'react';
import newProject from '../projects/newProject'

const Sidebar = () => {
    return (
     
        <aside>
          <h1>MERN <span>Tasks</span></h1>
          <newProject></newProject>
            <div className="proyectos">
                <h2>Tus proyectos</h2>
            </div>
        </aside>
         
    );

}

export default Sidebar