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
import SideBarPage from '../pages/SideBarPage'
import PagoPage from '../pages/PagoPage'
import CasualPage from '../pages/CasualPage'
import CatalogoPage from '../pages/CatalogoPages'
import NochePage from './NochePage'
import DeportivaPage from '../pages/DeportivaPage'


const AppRouter = () => {
  return (
    <>
    <Router>
     
        <Routes>
            <Route path="/registro" element={<RegistroPage />}/>
            <Route path="/inicio" element={<InicioSesionPage />}/>
            <Route path="/acerca" element={<AcercaDePage />}/>
            <Route path="/deseos" element={<ListaDeseosPage />}/>
            <Route path="/micuenta" element={<MiCuentaPage />}/>
            <Route path="/ordenar" element={<OrdenarPage />}/>
            <Route path="/localizacion" element={<LocalizacionPage />}/>
        

            <Route path="/pago" element={<PagoPage />}/>
            <Route path="/pago" element={<PagoPage />}/>
            <Route path="/catalogo" element={<CatalogoPage />}/>
            <Route path="/sidebar" element={<SideBarPage />}/>

            <Route path="/casual" element={<CasualPage />}/>
            <Route path="/noche" element={<NochePage />}/>
            <Route path="/deportiva" element={<DeportivaPage />}/>


            <Route path="/" element={<HomePage />}/>
{/*             <Route path='https://www.facebook.com/kamtali.store'/>
 */}            <Route path='/twitter' component={() => window.location = 'https://twitter.com/Kamtali_mx'}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>
    </>
  )
}

export default AppRouter

