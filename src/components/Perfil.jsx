import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/estiloRegistro.css'


const Perfil = () => {
  return (
    <>
        <section className='form-register col-md-6 '>
        <img className="rounded-circle perfil mb-3" src="https://lh3.googleusercontent.com/ogw/AOh-ky3a1npxhvEGykdUv2r7C8ts3KY4NgOyCSCXCYbSyg=s32-c-mo" srcSet="https://lh3.googleusercontent.com/ogw/AOh-ky3a1npxhvEGykdUv2r7C8ts3KY4NgOyCSCXCYbSyg=s32-c-mo 1x, https://lh3.googleusercontent.com/ogw/AOh-ky3a1npxhvEGykdUv2r7C8ts3KY4NgOyCSCXCYbSyg=s64-c-mo 2x " alt aria-hidden="true" data-noaft />

             <h1 className='navbar-brand col-sm-12 d-flex justify-content-center  mb-5'>Perfil</h1>

             <p>Nombre:</p>

             <p>Usuario:</p>
              <p>Alias:</p>
          </section>
    </>
  )
}

export default Perfil