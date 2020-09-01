import React from 'react'


const FormTarea = () => {

  

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
