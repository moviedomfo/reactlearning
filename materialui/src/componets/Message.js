import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
const  Message =  ({msg,isError})  => {
    
     
    return (
         <div>
           {isError && <Alert severity="error">{msg} </Alert>}
           {!isError && <Alert severity="info">{msg} </Alert>}

        </div> 
    );
  
};

 export default  Message;
    
