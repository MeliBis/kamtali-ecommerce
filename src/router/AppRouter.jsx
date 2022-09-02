import React from 'react'
import { 
BrowserRouter as Router, 
Route,
Routes,
Navigate,

} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import InicioSesionPage from '../pages/InicioSesionPage'
import RegistroPage from '../pages/RegistroPage'


const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/registro" element={<RegistroPage />}/>
            <Route path="/inicio" element={<InicioSesionPage />}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>
    </>
  )
}

export default AppRouter