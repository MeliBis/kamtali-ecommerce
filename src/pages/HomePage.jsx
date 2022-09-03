import React from 'react'
import NavBarPrincipal from '../components/NavBarPrincipal'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Section3 from '../components/Section3'
import SectionSlide1 from '../components/SectionSlide1'
import NavBar0 from '../components/NavBar0'
import Publicidad1 from '../components/Publicidad1'
import Section4 from '../components/Section4'
import SectionAnuncio1 from '../components/SectionAnuncio1'
import Section5Grid from '../components/Section5Grid'

const HomePage = () => {
  return (
    <>
      <NavBar0/>
      <NavBarPrincipal/>
      <NavBar/>
      <SectionSlide1/>
      <Section3/>
      <Section4/>
      <Publicidad1/>
      <Section5Grid/>
      <Footer/>
    </>
  )
}

export default HomePage