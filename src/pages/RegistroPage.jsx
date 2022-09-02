import React from 'react'
import '..//styles/estiloRegistro.css'
import NavBarPrincipal from '../components/NavBarPrincipal'

import NavBar from '../components/NavBar'
import Registro from '../components/Registro'
import Footer from '../components/Footer'

const RegistroPage = () => {
  return (
    <>
        <NavBarPrincipal/>
        <NavBar/>
        <Registro/>
        <Footer/>
    </>
  )
}

export default RegistroPage