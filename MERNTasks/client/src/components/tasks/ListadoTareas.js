import React ,{Fragment} from 'react'
import Tarea from '../tasks/Tarea'

const ListadoTareas = () => {

  const tareasProyecto = [
    {id : 1 ,nombre:'Tarea 1',estado : true},
    {id : 2 ,nombre:'Tarea 2',estado : false},
    {id : 3 ,nombre:'Tarea 3',estado : false},
    {id : 4 ,nombre:'Tarea 4',estado : true}

  ];

    return (
        <Fragment>
            <h2>Proyecto : Tienda </h2>
                <ul className="listado-tareas">
                    {  
                        tareasProyecto.length === 0  
                        ? 
                        <li className="tarea"><p>Nada de tareas</p></li>
                       
                         : 
                          tareasProyecto.map(t=>(
                                     <Tarea id={t.id}  tarea={t}></Tarea>
                                ))
                          
                    }
                </ul>
                <button type="button" className="btn btn-eliminar">Eliminar Proyecto</button>
        </Fragment>
                
    );

}

export default ListadoTareas;
