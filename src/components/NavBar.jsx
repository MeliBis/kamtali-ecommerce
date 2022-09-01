import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  NavLink,
  Link,
} from "react-router-dom";


const NavBar = () => {
  return (
    <nav classname="navbar navbar-expand-lg bg-light d-flex ">
      <div className="container-fluid mw-100  ">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                   Categorias
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Ropa
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Ropa bordada
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mascotas
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Tecnología
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Postres gourmet
                      </a>
                    </li>
                  </ul>
                </li>
             
             
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Lo más nuevo
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Del mes
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        En tienda
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      Tienda Online
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Ofertas
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Ropa
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                       Tecnología
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                       Mascotas
                      </a>
                    </li>
                  </ul>
                </li>

               
              </ul>
            </div>

            <div className="d-flex gap-2 d-md-flex justify-content-md-end">
              `
              <li className="nav-item dropdown d-flex ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </a>

                <ul className="dropdown-menu dropdown-menu-end">
                  <div className="d-flex">
                    <li>
                      <Link to="/registro" className="dropdown-item  " href="#">
                        <button type="button" class="btn btn-outline-primary me-1">
                          Regístrate
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/inicio" className="dropdown-item " href="#">
                        <button type="button" class="btn btn-outline-warning">
                          Iniciar Sesión
                        </button>
                      </Link>
                    </li>
                  </div>
                  <li>
                    <Link to="/cuenta" className="dropdown-item" href="#">
                      Mi cuenta
                    </Link>
                  </li>

                  <li>
                    <Link to="/deseos" className="dropdown-item" href="#">
                      Lista de deseos
                    </Link>
                  </li>
                  <li>
                    <Link to="/orden" className="dropdown-item" href="#">
                      Ordear
                    </Link>
                  </li>
                </ul>
              </li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  fill="currentColor"
                  class="bi bi-cart2 dark"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default NavBar;
