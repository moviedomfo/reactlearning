
import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NewProject = () => {

    //Obtener el state del formulario con el hook useContext
    
    const proyectosContext = useContext(proyectoContext);

    const {formulario,mostrarFormulario} = proyectosContext;


    const onSubmitCreate= (e)=>{
        e.preventDefault();
        alert('onSubmitCreate');
        //validar
          
        //pasarlo action


    }


      //state p/proyecto
      const [project,saveProject] = useState({
        proyectName:"",         id:""
      });
   
      const {proyectName}=project;

      const onChangeProject= (e)=>{
        saveProject ({
            ...project,
            [e.target.name] :e.target.name
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
                        <input type="text" className="input-text" name="proyectName" 
                    
                            value={proyectName}
                            onChange={onChangeProject}
                        />

                        <input 
                            type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />
                    
                    </form>
                )
                  : null
            }
    
        </Fragment>

    );

}

export default NewProject;