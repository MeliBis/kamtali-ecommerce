import React from 'react'
import '../styles/estiloRegistro.css'

const Inicio = () => {
  return (
    <>
         <section className='form-register'>
            <h1 className='navbar-brand col-sm-12 d-flex justify-content-center  mb-4'>Iniciar Sesión </h1>
            <input className='controls' type="email" name='email' id='email' placeholder="m@gmail.com" />
            <input className='controls' type="password" name='contrasena' id='contrasena' placeholder="Contraseña"  />
            <p >Estoy de acuerdo  con <a href="/" className='link-acuerdo fw-bold'>Terminos y condiciones</a></p>
            <input className=' boton' type="submit " value='Iniciar sesión'/>
          </section>
    </>
  )
}

export default Inicio