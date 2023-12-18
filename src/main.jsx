import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/styles.css'
import { AppDatos } from './AppDatos'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppDatos />
    </React.StrictMode>
  </BrowserRouter>
)
