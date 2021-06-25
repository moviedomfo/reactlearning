import { Divider } from '@material-ui/core';
import React ,{useRef} from 'react';
import './GridPelsoft.css';
 import styled  from 'styled-components';

const Title =styled.h3 ` 
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  ` ;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;
const  GridPelsoft =  ()  => {

    // es un selector como document.get....
 const refImage = useRef(); // ai tenemos un React component hay que usar let ref = createRef()

    return (
         <Wrapper>
             <Title>
                    Uso de la grilla
            </Title>
                <div className="grilla-container">

                    <div >
                        <Title>Hola</Title>
                        <img ref={refImage} src = "https://picsum.photos/id/684/600/400?blur=5"></img>
                    </div>
                            
                    <div >
                        <Title>Hola</Title>
                        <img src = "https://picsum.photos/id/684/600/400?animal=5"></img>
                    </div>
                    
                </div>
        </Wrapper> 
    );

  
};


 export default  GridPelsoft;
    
