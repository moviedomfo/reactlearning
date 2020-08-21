import React, {  Fragment } from 'react';
import styled from '@emotion/styled';


const TextoFooter = styled.label`

    font-family: cursive;
    font-size:1em;
    
    color:aqua;
    span {
        font-weight:bold;
    }
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;

const InfoA = styled.a`
    font-family: cursive;
    font-size: 15px;
    color:coral;
    font-weight:bold;
    
`;
//function expression
const Footer = ({companyName}) => {

    return (
        <Fragment>
            <TextoFooter>Todos los derechos reservados  {companyName} 
            <InfoA  href="https://www.linkedin.com/in/marcelooviedo" target >Profesional profile</InfoA>
            
            </TextoFooter>
            
        </Fragment>
        
      );
}
 
export default Footer;

