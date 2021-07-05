import  {useState, useEffect } from 'react'

// para react todos los hooks deben empesar con hooks
// Aqui la peticion es generica. La lógica de obtener los avatar de c/pokemon iria en el HoockPersonalizado.js qu 
// utiliza el usePelsoftFetch
const  usePelsoftFetch =  (url)  => {
    const [data, setData] = useState(null);
    const [enviada, setEnviada] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const callApiAsync = async (url) => {
          
            setTimeout(async function() {
                
                try{
          
                    if(!url){
                       // eslint-disable-next-line no-throw-literal
                       throw  {
                                   err:true,
                                   status:501,
                                   statusText: 'Falta URL'
                               };
                       }
                       let res = await fetch(url);
                       if(!res.ok){
                           
                           throw {
                               err:true,
                               status:res.status,
                               statusText: !res.statusText ? "Ocurrio un error" : res.statusText 
                           };
                       }
                       let data = await res.json();
                       setData(data);
                       setEnviada(true);
                       setError({err:false}); // unicamente la propiedad err
                  
                   }catch(err){
                       setEnviada(true);
                       setError(err);
                       console.log(err);
                   }

              }, 4000);
            
          
        };

        callApiAsync(url);
    },[url]);

    return  {data,enviada,error};
};

export default usePelsoftFetch;