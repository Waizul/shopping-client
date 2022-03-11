import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const AdmminRoute = ({children}) => {
    const admin = useSelector(state=>state.user?.currentUser?.isAdmin)
const location = useLocation()

  return (
    !admin ? <Navigate to="/login" state={{from:location}} replace /> : children 
  )
}

export default AdmminRoute