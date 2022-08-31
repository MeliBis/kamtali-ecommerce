import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {
  return (
    <div>
      <footer className="text-dark py-4 bg-warning">
        <div className="container text-muted ">
          <nav className='row'>
          <img src="" alt="" /> 
          <ul className="col-12 col-md-2 list-unstyled">
                <li className="font-weight-bold mb-2 ">Horario</li>
                <li className="text-left">11:00 a 21:00 horas</li>
               
            </ul>

            <ul className="col-12 col-md-2 list-unstyled">
                <li className="font-weight-bold mb-2">Horario</li>
                <li className="text-left">11:00 a 21:00 horas</li>
               
            </ul>
            <ul className="col-8 col-md-2 list-unstyled">
                <li className="font-weight-bold mb-2">Contacto</li>
                <li className="text-left">Tel: 5615999821</li>
            </ul>
            <ul className="col-8 col-md-2 list-unstyled">
                <li className="font-weight-bold mb-2">Dirección</li>
                <li className="text-left">Calle Carmen Serdán no.43 Zacatlán, Puebla</li>
                <li>
                <Link to='/'></Link>
                </li>
            </ul>
           
            <ul className="col-10 col-md-2 list-unstyled">
                <li className="font-weight-bold mb-2 justify-content-center mb-3">Síguenos</li>
                <li className="d-flex justify-content-between ">
                <Link to='/' className="text-reset"><i class="gg-facebook"></i>
                </Link>   
                <Link to='/' className="text-reset"><i class="gg-instagram"></i>
                </Link>
                <Link to='/' className="text-reset"><i class="gg-twitter"></i>
                </Link>
                </li>
            </ul>
          </nav>
        </div>
      </footer>
      </div>
  )
}

export default Footer