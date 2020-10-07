import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NewProject = () => {

    
    //Obtener el state del formulario con el hook useContext
    
    const proyectosContext = useContext(proyectoContext);

    const {formulario,errorformulario,mostrarFormulario,addProyecto,mostrarError } = proyectosContext;


      //state p/proyecto
      const [project,saveProject] = useState({projectName:'' });
   
      const {projectName}=project;

      const onChangeProject= e =>{
        saveProject ({
            ...project,
            [e.target.name] :e.target.value
        }) 
      }

      const onSubmitCreate= (e)=>{
        e.preventDefault();
        
        //validar
          if(projectName === ''){
                mostrarError();//Esta llamada va porjectState.js invocando la funcion  mostrarError
              return;
          }
          
        //agregarlo al state 
        addProyecto(project);
        
        //pasarlo action
      // Reiniciar el form
        saveProject({
            projectName: ''
        })

    }

    return (
        <Fragment>
            <button type="reset" className="btn btn-block btn-primario"  
                onClick={()=>mostrarFormulario()}
                >
                Nuevo proyecto
                
            </button>
            {   formulario ?
                (       
                     <form className="formulario-nuevo-proyecto" onSubmit={onSubmitCreate}>
                        <input 
                            type="text" 
                            className="input-text" 
                            name="projectName" 
                            value={projectName}
                            onChange={onChangeProject}
                        />

                        <input 
                            type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />
                    
                    </form>
                )
                  : null
            }
                { errorformulario ? <p className="mensaje error">El nombre del Proyecto es obligatorio</p>  : null }

        </Fragment>

    );

}

export default NewProject;