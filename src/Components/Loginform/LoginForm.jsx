import React from 'react';
import './loginForm.css';
import { FaUser, FaLock  } from "react-icons/fa";



const LoginForm= () => {
    return (
        <div className="wrapper">
            <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Usuario'required />
                <FaUser className='icon' />
            </div>
            <div className="input-box">
                <input type="password" placeholder='Contraseña'required />
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