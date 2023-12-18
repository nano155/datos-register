import React from 'react'
import {Route, Routes}  from 'react-router-dom'
import { AuthRouter } from '../auth/router/AuthRouter'
import { DatosRouter } from '../datos/router/DatosRouter'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='auth/*' element={<AuthRouter/>}/>
      <Route path='/*' element={<DatosRouter/>}/>
    </Routes>
  )
}
