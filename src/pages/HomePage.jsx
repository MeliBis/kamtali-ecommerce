import React from 'react'
import NavBarPrincipal from '../components/NavBarPrincipal'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Section3 from '../components/Section3'
import SectionSlide1 from '../components/SectionSlide1'
import NavBar0 from '../components/NavBar0'
import Publicidad1 from '../components/Publicidad1'

const HomePage = () => {
  return (
    <>
      <NavBar0/>
      <NavBarPrincipal/>
      <NavBar/>
      <SectionSlide1/>
      <Section3/>
      <Publicidad1/>
      <Footer/>
    </>
  )
}

export default HomePage