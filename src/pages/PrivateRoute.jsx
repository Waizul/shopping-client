import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import Payment from './Payment'

const PrivateRoute = ({children}) => {
    const user = useSelector(state=>state.user?.currentUser)
const location = useLocation()

  return (
    !user ? <Navigate to="/login" state={{from:location}} replace /> : children 
  )
}

export default PrivateRoute