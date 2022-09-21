import React from "react";
import {
  BrowserRouter as Router,
  /*  Route,
  Routes,
  Navigate, */
  NavLink,
  Link,
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light d-flex ">
      <div className="container  ">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"></li>
                <li className="nav-item d-flex  ">
                  <Link to="/catalogo" className="nav-link " href="#">
                    Catálogo
                  </Link>
                </li>
                <li className="nav-item dropdown"></li>
                {/* 
                <li className="nav-item">
                  <Link to='/catalogo' className="nav-link" href="#">
                    Ofertas 
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  
                  
                </li> */}
              </ul>
            </div>

            {/* menu right */}
            <div className="d-flex container " >
              
            <h3 className=" d-grid me-5  row justify-content-between">Hola</h3>
            <div className="d-flex gap-4   ">
              <li className="nav-item dropdown d-flex ">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle "
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    fill="currentColor"
                    class="bi bi-person list-unstyled"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </Link>
                {/* botones */}
                <ul className="dropdown-menu dropdown-menu-end ">
                  <div className="d-flex ">
                    <li>
                      <Link to="/registro" className="dropdown-item  " href="#">
                        <button
                          type="button"
                          class="btn btn-outline-dark  "
                        >
                          Regístrate
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/inicio" className="dropdown-item " href="#">
                        <button type="button" class="btn btn-outline-dark">
                          Iniciar Sesión
                        </button>
                      </Link>
                    </li>
                  </div>

                  <li>
                    <Link to="/deseos" className="dropdown-item" href="#">
                      Lista de deseos
                    </Link>
                  </li>
                  <li>
                    <Link to="/ordenar" className="dropdown-item" href="#">
                      Ordear
                    </Link>
                  </li>
                </ul>
              </li>
              {/* card */}
              <li className=" list-unstyled ">
                <NavLink to="/compra" className=" position-absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    fill="currentColor"
                    class="bi bi-cart2  "
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                  </svg>
                </NavLink>
              </li>
              <span className=" badge bg-danger rounded-pill  ms-1 mb-3 dark">
                3
              </span>
            </div>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
