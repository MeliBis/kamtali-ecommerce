import React, { Link} from "react";
const imgMuestra = require('../assets/sf.png')


const Productos = () => {
  return (
    <>
    <div>

      <h1 className="title">Productos</h1>
      <div className="productos">
        <Link to="./">

        <div className="producto">
          <img src={imgMuestra} alt="" />
        </div>
        </Link>
        <div className="producto-footer">
          <h2>Dama</h2>
          <p>Primavera</p>
          <div className="price">
            $530
          </div>
          <div className="button">
            <button className="btn btn-dark">
              Añadir al carrito
            </button>
            <Link to='./'></Link>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default Productos;
