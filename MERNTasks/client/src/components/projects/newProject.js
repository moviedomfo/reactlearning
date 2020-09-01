
import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NewProject = () => {

    //Obtener elstate del formulario con el hook useContext
    const proyectoContext = useContext(proyectoContext);


    const {formulario} =proyectoContext;


    const onSubmitCreate= (e)=>{
        e.preventDefault();
        alert('onSubmitCreate');
        //validar
          
        //pasarlo action


    }


      //state p/proyecto
      const [project,saveProject] = useState({
        proyjectName:"",
         id:""
      });
   
      const {proyjectName}=project;

      const onChangeProject= (e)=>{
        saveProject ({
            ...project,
            [e.target.name] :e.target.name
        }) 
      }
    return (
        <Fragment>
            <button type="reset" className="btn btn-block btn-primario"  >
                Nuevo proyecto
            </button>
            { formulario === true ?
                (       
                     <form className="formulario-nuevo-proyecto" onSubmit={onSubmitCreate}>
                        <input type="text" className="input-text" name="proyjectName" 
                    
                            value={proyjectName}
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