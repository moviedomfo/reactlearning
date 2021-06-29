import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
const  Message =  ({msg,isError})  => {
    
     
    return (
         <>
           {isError && <Alert severity="error">{msg} </Alert>}
           {!isError && <Alert severity="info">{msg} </Alert>}

        </> 
    );
  
};

 export default  Message;
    
