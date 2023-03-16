import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Admin } from './Admin'
import { Homepage } from './Homepage'
import { Login } from './Login'
import { PrivateRoute } from './PrivateRoute'

export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/admin' element={<PrivateRoute>
          <Admin/>
        </PrivateRoute>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/*' element={<h1>404 Page Not Found</h1>}></Route>
    </Routes>
  )
}
