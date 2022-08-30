import React from 'react'
import { 
BrowserRouter as Router, 
Route,
Routes,
Navigate,
NavLink,
} from 'react-router-dom'

import HomePage from '../pages/HomePage'
const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />}/>

            <Route path="/*" element={<Navigate to="/" />} />

        </Routes>
    </Router>
    </>
  )
}

export default AppRouter