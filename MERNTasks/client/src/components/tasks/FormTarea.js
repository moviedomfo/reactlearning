import React,{useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';

const FormTarea = () => {

  
    // extraer si un pryecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const [project] = proyectosContext;
    //si no hay poryectos seleccionado 
    if(!project){
        return null
    }
    const { proyectoActual } = project;


    //Cargamos la info de la tarea
    return (
            <div className="formmulario">
                <form>
                    <div className="contenedor-input">
                        <input
                            type="text"
                            className="input-text"
                            name="nombre"
                            placeholder = "Nombre tarea"
                        />
                        </div>
                    <div className="contenedor-input">
                        <input type ="checkbox"
                                className="input-ch"
                                name="selected"
                                />
                    </div>
                    <div className="contenedor-input">
                        <input type ="submit"
                                className="btn btn-primary btn-submit  btn-block"
                                value="Agrgar tarea"
                                />
                    </div>
                </form>
            </div>
    );

}

export default FormTarea
