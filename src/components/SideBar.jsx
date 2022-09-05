import React from "react";

const SideBar = () => {
  return (
    <>
    <h1 class="visually-hidden ">Sidebars examples</h1>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
        style={{ width: 280, }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={100}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">Sidebar</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width={16} height={16}>
                <use xlinkHref="#home" />
              </svg>
              Ordenar
            </a>
          </li>
          
        </ul>
        <hr />
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            id="dropdownUser1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            <strong>MeliBis</strong>
          </a>
          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser1"
          >
          
           
            <li>
              <a className="dropdown-item" href="#">
                Perfil
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
              Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
