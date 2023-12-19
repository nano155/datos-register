import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { RegisterPage } from '../page/RegisterPage'
import { DatosPage } from '../page/DatosPage'
import { NavBar } from '../components/navbar/NavBar'
    

export const DatosRouter = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<DatosPage/>}/>
        <Route path='update/:id' element={<RegisterPage/>} />
        <Route path='register' element={<RegisterPage/>}/>
    </Routes>
    </>
  )
}
