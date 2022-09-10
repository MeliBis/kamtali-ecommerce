import React from 'react'
import NavBar from '../components/NavBar'
import NavBarPrincipal from '../components/NavBarPrincipal'
import ProductosDama from '../components/ProductosDama'

const ProductosDamaPage = () => {
  return (
    <>
      <NavBarPrincipal/>
      <NavBar/>
      <ProductosDama/>
    </>
  )
}

export default ProductosDamaPage;