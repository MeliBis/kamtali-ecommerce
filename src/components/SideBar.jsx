import React from "react";

const imgCard = require('../assets/ropaDama/12.png')


const SideBar = () => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 mt-2 p-3 text-dark vh-100 bg-light nav__list"
        style={{ width: 500}}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          
          <div className=" ">
            <div className="carrito_agrgar d-flex justify-content-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-circle-fill me-4 mt-1"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
              </svg>
              <span className="row justify-content-center">Agregar al carrito</span>
            </div>
            <div className="row justify-content-center ">

              <img src={imgCard}  className=" mt-4 row col-md-5 "  alt="..." />
            </div>
            <div className="precio ">
              <h4 className=" d-flex justify-content-center">Subtotal del carrito </h4>
              <div
                class="btn-group"
                role="group"
                aria-label="Basic outlined example"
              >
                {/* botones */}
                <div className=" d-flex  " >
                  <button type="button" className="btn btn-outline-dark  me-3 d-flex ">
                    Carrito
                  </button>
                  
                  <button type="button" className="btn btn-warning">
                    Continuar con el pago
                  </button>
                </div>
              </div>
            </div>
          </div>
        </a>
        <hr />
        {/* colocar producto */}

        {/* btn ordenar */}
        <ul className="nav nav-pills flex-column mb-auto ">
          <li className="nav-item text-center">
            <a href="" className="nav-link active" aria-current="page">
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
              src="https://lh3.googleusercontent.com/ogw/AOh-ky3a1npxhvEGykdUv2r7C8ts3KY4NgOyCSCXCYbSyg=s32-c-mo"
              alt
              width={32}
              height={32}
              className="rounded-circle me-2"
            />
            {/* footer */}
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
