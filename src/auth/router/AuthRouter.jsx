import React from 'react'
import {Routes, Route} from 'react-router-dom'
import { Login } from '../page/Login'

export const AuthRouter = () => {
  return (
    <Routes>
        <Route path='login' element={<Login/>}/>     
    </Routes>
  )
}

