
import React, { Fragment } from 'react';



const newProject = () => {

    return (
        <Fragment>
            <button type="reset" className="btn btn-block btn-primario"  >
                Nuevo proyecto
            </button>

            <form className="formulario-nuevo-proyecto">
                <input type="text" className="input-text" name="proyjectName"
                    // value={proyjectName}
                />

                <input 
                    type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />

              
            </form>
        </Fragment>

    );

}

export default newProject;