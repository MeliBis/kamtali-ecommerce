import React from 'react'
import { NavLink } from 'react-router-dom'

const imagenLogoNav = require('../assets/logokamtaliBco.png')


const NavBarPrincipal = () => {
  return (
    <>
 <nav className="navbar bg-primary ">
  <div className="container">
    <a className="navbar-brand">
    <img src={imagenLogoNav} className="card-img-top" style={{width: '10rem'}} alt="..." />
    </a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-primary" type="submit">Buscar</button>
    </form>
  </div>
</nav>


    </>
  )
}

export default NavBarPrincipal