import React from 'react'
const imgAcercaDe = require('../assets/sf.png')

const AcercaDe = () => {
  return (
    <>


        <div className="container  col  vh-100 row align-items-center justify-content-center display-4"> 
          <div className="row flex-lg-row-reverse align-items-center  py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={imgAcercaDe} className="d-block mx-lg-auto img-fluid rounded ms-4" alt="avatar Melissa" width={700}  loading="lazy" />
            </div>
            <div className="col-lg-4  ">
              <h2 className="  lh-1 mb-5"> Kamtali a la vanguardia </h2>
              <p className="lead ">kamtali ponde a disposición de la población productos que faciliten su vida diaria con tecnológicos innovadores, facilidad de adquirir servicios digitales y productos artesanales, para sus mascotas o ropa para publico en general</p>
              <p className="lead ">Nuestro objetivo en Kamtali, es facilitar productos que la población necesita en su vida diaria como tecnológicos e innovadores, comodidad en  adquirir servicios digitales y productos artesanales, productos para sus mascotas o ropa para dama, caballeros y/o niños de excelente calidad y buen precio. <br /> Seremos un lugar en donde la población tendrá un acceso sencillo y directo a nuestros productos que necesiten de manera presencial u online. </p>
            
            </div>
          </div>
        </div>


 </> 
 
  )
}

export default AcercaDe