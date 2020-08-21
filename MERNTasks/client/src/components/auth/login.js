import React from 'react';


const Login = () => {
    return (
        <div className="form-usuario">
              <div className="contenedor-form sombra-dark">
              <h1>Inicio</h1>
                <form>
                    <div className="campo-form" >
                        <label>usuario</label>

                    </div>
                    <div className="campo-form" >
                        <label htmlFor="usuario">password</label>
                        <input 
                            type="text"
                            ></input>
                    </div>
                </form>
            </div>
        </div>
   
    )

}

export default Login;