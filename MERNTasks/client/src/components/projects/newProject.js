
import React, { Fragment, useState } from 'react';



const NewProject = () => {

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

            <form className="formulario-nuevo-proyecto" onSubmit={onSubmitCreate}>
                <input type="text" className="input-text" name="proyjectName" 
              
                     value={proyjectName}
                     onChange={onChangeProject}
                />

                <input 
                    type="submit" className="btn btn-block btn-primario" value="Agregar proyecto" />

              
            </form>
        </Fragment>

    );

}

export default NewProject;