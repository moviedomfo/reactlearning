import React, {useState, useEffect } from 'react'

// par areact todos los hooks deben em pesar con hooks
const  usePelsoftFetch =  (url)  => {
    const [data, setData] = useState(null)
    const [enviada, setEnviada] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{

        const callApiAsync = async (url) => {
            try{
                let res = await fetch(url);
                if(!res.ok){
                    throw({
                        err:true,
                        status:res.status,
                        message: !res.statusText ? "Ocurrio un error" : res.statusText 
                    });
                }
                setData(await res.json());
                setEnviada(true);
                setError({err:false}); // unicamente la propiedad err
               
            }catch(err){
                setEnviada(true);
                setError(err);
            }
          
        };
        callApiAsync(url);
    },[url]);

    return  [data,enviada,error]
};

export default usePelsoftFetch;