import React, { useEffect ,useState} from 'react'
import { helpHttp } from '../helpers/helpHttp';

const Selector = ({tittle,url,handleChange}) => {

 const [lista, setLista] = useState([]);

    useEffect(() => {
        
        helpHttp().get(url).then((res)=>{
    
            if(!res.err){
                
                setLista(res);
            }else{
                setLista([]);
              
            }
            
        });
    
    }, [url]);

    const handleOptions =(event)=>{
        alert("selecciono " + {tittle} + " = " + event.target.value);

        // le paso directaemne el name
        handleChange(event.target.value);
    }

    return (
        <div>
            <label>{tittle}</label>

            <select name="tittle" id={tittle} 
            onChange= {handleOptions} defaultValue= "--">
                
               <option value="--">---</option>
                {!lista &&  (lista.map((item)=><option id={item.name} value={item.id}>{item.name}</option>))} 
            </select>
            
        </div>
    )
}

export default Selector
