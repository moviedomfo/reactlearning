import React, { Fragment } from 'react';

//function declaration 
function Header() {
    
    const edad =18;
    let msg ;
    if(edad>10){
        msg = 'MAYOR de edad';
    }else{
        msg = 'MAYOR de edad';
    }
    
    //todo lo que esta aqui es lo que se ve
    return(
        <Fragment>
            <h1>desde el header</h1>
            
            <ul>
                <li>{edad}</li>
            </ul>
            <div>
                {msg}
            </div>
        </Fragment>
        
            
    )
}

export default Header;