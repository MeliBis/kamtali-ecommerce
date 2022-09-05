import React from 'react'
import { 
BrowserRouter as Router, 
Route,
Routes,
Navigate,

} from 'react-router-dom'
import AcercaDePage from '../pages/AcercaDePage'
import HomePage from '../pages/HomePage'
import InicioSesionPage from '../pages/InicioSesionPage'
import ListaDeseosPage from '../pages/ListaDeseosPage'
import MiCuentaPage from '../pages/MiCuentaPage'
import RegistroPage from '../pages/RegistroPage'
import OrdenarPage from '../pages/OrdenarPage'
import LocalizacionPage from '../pages/LocalizacionPage'
import CaballeroPage from '../pages/CaballeroPage.jsx'
import OfertaDiaPage from '../pages/OfertaDiaPage'
import OfertaMesPage from '../pages/OfertaMesPage'
import DamasPage from '../pages/DamasPage'
import SideBarPage from '../pages/SideBarPage'
import PagoPage from '../pages/PagoPage'



const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/registro" element={<RegistroPage />}/>
            <Route path="/inicio" element={<InicioSesionPage />}/>
            <Route path="/acerca" element={<AcercaDePage />}/>
            <Route path="/deseos" element={<ListaDeseosPage />}/>
            <Route path="/micuenta" element={<MiCuentaPage />}/>
            <Route path="/ordenar" element={<OrdenarPage />}/>
            <Route path="/localizacion" element={<LocalizacionPage />}/>
            <Route path="/damas" element={<DamasPage />}/>
            <Route path="/caballero" element={<CaballeroPage />}/>
            <Route path="/ofertadia" element={<OfertaDiaPage />}/>
            <Route path="/ofertames" element={<OfertaMesPage />}/>
            <Route path="/sidebar" element={<SideBarPage />}/>
            <Route path="/pago" element={<PagoPage />}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>
    </>
  )
}

export default AppRouter