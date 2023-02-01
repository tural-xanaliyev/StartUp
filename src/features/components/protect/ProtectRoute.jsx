import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRoute = ({ user, children }) => {

    return (!user ? <Navigate to='/' /> : <Outlet/>)

}

export default ProtectRoute