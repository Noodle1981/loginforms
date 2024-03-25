import React, { useState } from 'react';
import './loginForm.css';
import { FaUser, FaLock  } from "react-icons/fa";
import { SHA512 } from "crypto-js";


const LoginForm= () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/consulta', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: SHA512(password).toString()
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
          .then(message => console.log(message))
    }

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit} >
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Usuario'required value={email} onChange={handleEmail} />
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Contraseña'required value={password} onChange={handlePassword}/>
                    <FaLock className='icon'/>
                </div>

                <dir className="remember-forgot">
                    <label> <input type="checkbox" />Recordarme</label>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </dir>

                <button type='submit'>Ingresar</button>

                <div className='register-link'>
                    <p>¿No tienes una cuenta? <a href="#">Registrar</a> </p>
                </div>
            
            </form>
        </div>
    );
    
};

export default LoginForm;