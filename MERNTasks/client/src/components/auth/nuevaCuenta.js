import React, {useState} from 'react';
import {Link } from "react-router-dom";


const NuevaCuenta = () => {


    const [userInfo, saveUserInfo] = useState({
        userName: '',
        password : ''
     });

   //extraemos el userInfo
   const {userName,password,confirmPassword} = userInfo;

    const onChangeText = (e) =>{
            console.info(e.target.value);

            saveUserInfo({
                ...userInfo,
                    [e.target.name] : e.target.value
            })
    }

    const onSubmitCrearCuenta= (e)=>{
        e.preventDefault();
        alert('onSubmitCrearCuenta');
        //validar

        //pasarlo action


    }
   

    return (
        <div className="form-usuario">
        <div className="contenedor-form sombra-dark">
        <h1>Crear nueva cuenta de usuario</h1>
          <form onSubmit= {onSubmitCrearCuenta}>
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
                  <label htmlFor="confirmPassword">Password</label>
                  <input 
                      type="text"
                      id ="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange = {onChangeText}
                     value= {confirmPassword}
                      ></input>
              </div>
              <div className="campo-form" >
                  
                  <input 
                      type="sumbit"
                      id ="user"
                      className="btn btn-primario btn-block"
                      value ="Crear cuenta"/>
              </div>

           
          </form>
      </div>
  </div>
   
    );

}

export default NuevaCuenta;