import React from 'react'
import NavBarPrincipal from '../components/NavBarPrincipal'

import NavBar from '../components/NavBar'
import Registro from '../components/Registro'
import NavBar0 from '../components/NavBar0'

const RegistroPage = () => {
  return (
    <>
    <NavBar0/>
        <NavBarPrincipal/>
        <NavBar/>
        <Registro/>
    </>
  )
}

export default RegistroPage