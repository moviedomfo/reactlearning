import React from 'react';
import Sidebar from '../layout/sidebar';
import Barra from '../layout/barra';
import FormTarea from '../tasks/FormTarea';
import ListadoTareas from '../tasks/ListadoTareas';

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar>                
            </Sidebar>
            <div className="seccion-principal">
                <Barra></Barra>
                <main>
                    <FormTarea>
                                </FormTarea>
                    <div className="seccion-tarea">
                       <ListadoTareas></ListadoTareas>
                    </div>
                </main>
            </div>
        </div>
    );

}

export default Proyectos