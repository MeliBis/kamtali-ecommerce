import React from 'react'
import {Link,} from 'react-router-dom'


const imgCatalogo = require('../assets/cover.jpg')

const Catalogo = () => {
  return (
    <>
      <img src={imgCatalogo} className="cover d-block mx-lg-auto img-fluid rounded  ms-4" alt="avatar Melissa" width={700}  loading="lazy" />
      <div className="container mt-5 "role="group" aria-label="Basic radio toggle button group">
        <Link style={{margin:5}}to='/Casual' className=' btn btn-dark text-decoration-none  btn-lg '>Casual</Link>
        <Link style={{margin:5}}to='/Noche'className='btn btn-dark text-decoration-none  btn-lg '>Noche</Link>
        <Link style={{margin:5}}to='/Deportiva' className='btn btn-dark text-decoration-none  btn-lg'>Deportiva</Link>
     </div>
     {/* button group */}


      
    </>
  )
}

export default Catalogo