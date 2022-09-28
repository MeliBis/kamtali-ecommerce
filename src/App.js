import React from 'react'
import AppRouter from './router/AppRouter'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './styles/estiloRegistro.css'
import './styles/cardProductos.css'
import './styles/App.css'


import {Pay} from '@paypal/react-paypal-js'


const App = () => {
  return (
    <AppRouter/>
  )
}

export default App