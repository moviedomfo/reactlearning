import React, {useState} from 'react';
import {Link } from "react-router-dom";


const Login = () => {


    const [userInfo, saveUserInfo] = useState({
        userName: '',
        password : ''
     });

   //extraemos el userInfo
   const {userName,password} = userInfo;

    const onChangeText = (e) =>{
            console.info(e.target.value);

            saveUserInfo({
                ...userInfo,
                    [e.target.name] : e.target.value
            })
    }

    const onSubmitLoging= (e)=>{
        e.preventDefault();
        alert('onSubmitLoging');
        //validar

        //pasarlo action


    }
   

    return (
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
        <h1>Inicio de sesión</h1>
          <form onSubmit= {onSubmitLoging}>
              <div className="campo-form" >
                  <label htmlFor ="userName">Usuario</label>
                  <input 
                      type="text"
                      id ="userName"
                      name="userName"
                      placeholder="user name"
                       value= {userName}
                      onChange = {onChangeText}

                      />
              </div>
              <div className="campo-form" >
                  <label htmlFor="password">Password</label>
                  <input 
                      type="text"
                      id ="password"
                      name="password"
                      placeholder="password"
                      onChange = {onChangeText}
                     value= {password}
                      ></input>
              </div>

              <div className="campo-form" >
                  
                  <input 
                      type="sumbit"
                      id ="user"
                      className="btn btn-primario btn-block"
                      value ="Iniciar sesion"/>
              </div>

              <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                Registrate
              </Link>
          </form>
      </div>
  </div>
   
    );

}

export default Login;