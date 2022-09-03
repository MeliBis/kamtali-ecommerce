import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/estiloRegistro.css'
const logoDark = require('../assets/logoKamtaliDark.png')

function Registro() {
  return (
    <>

        <section className='form-register'>
             <h1 className='navbar-brand col-sm-12 d-flex justify-content-center  mb-5'>Regístrate</h1>
            <input className='controls' type="text" name='nombre' id='nombre' placeholder="Nombre" />
            <input className='controls' type="text" name='apellido' id='apellido' placeholder="Apellido" />
            <input className='controls' type="email" name='email' id='email' placeholder="m@gmail.com" />
            <input className='controls' type="password" name='contrasena' id='contrasena' placeholder="Contraseña"  />
            <p className='text-dark '>Estoy de acuerdo  con <a href="/" className=' fw-bold'>Terminos y condiciones</a></p>
            <input className=' boton' type="submit " value='Registrar'/>
            <p className='link-cuenta fw-bold'><Link to='/inicio'>Ya tengo cuanta</Link></p>
          </section>

    </>
  )
}

export default Registro