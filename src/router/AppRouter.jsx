import React from 'react'
import { 
BrowserRouter as Router, 
Route,
Routes,
Navigate,
NavLink,
} from 'react-router-dom'
import HomePage from '../pages/HomePage'
import RegistroPage from '../pages/RegistroPage'
import Registro from '../pages/RegistroPage'


const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/registro" element={<RegistroPage />}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>
    </>
  )
}

export default AppRouter