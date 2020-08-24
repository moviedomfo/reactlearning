import React from 'react';
import Sidebar from '../layout/sidebar';
import Barra from '../layout/barra';


const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar>                
            </Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>

                    <div className="seccion-tarea">

                    </div>
                </main>
            </div>
        </div>
    );

}

export default Proyectos