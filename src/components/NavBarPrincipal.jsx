import React from 'react'
import { Link } from 'react-router-dom'

const imagenLogoNav = require('../assets/logokamtaliBco.png')


const NavBarPrincipal = () => {
  return (
    <>
 <nav className="navbar bg-dark" >
  <div className="container d-flex">
    <ul>
    <Link to="/" href="" className=" list-unstyle">
    <img src={imagenLogoNav} className="card-img-top mt-2" style={{width: '10rem'}} alt="..." />
    </Link>

    </ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-light" type="submit">Buscar</button>
    </form>
  </div>
</nav>


    </>
  )
}

export default NavBarPrincipal;