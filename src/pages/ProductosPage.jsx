import React from 'react'
import Productos from '../components/Productos'
import NavBar from '../components/NavBar'
import NavBarPrincipal from '../components/NavBarPrincipal'

const ProductosPage = () => {
  return (
    <>
      <NavBarPrincipal/>
      <NavBar/>
      <Productos/>
    </>
  )
}

export default ProductosPage;