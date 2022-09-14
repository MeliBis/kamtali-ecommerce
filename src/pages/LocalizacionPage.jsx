
import React from 'react'
import NavBar from '../components/NavBar'
import NavBarPrincipal from '../components/NavBarPrincipal'
import Geolocalizacion from  '../components/Geolocalizacion'

const LocalizacionPage = () => {
  return (
    <>
      <NavBarPrincipal/>
      <NavBar/>
      <Geolocalizacion/>
    </>
  )
}

export default LocalizacionPage