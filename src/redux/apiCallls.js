
import { publicRequest } from '../requestMethods'

import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess, logoutSuccess } from "./userReducer"

export const register = async (dispatch,userCredentials,navigate) => {
    dispatch(registerStart())
    try {
        const res = await publicRequest.post('/auth/register', userCredentials)
        dispatch(registerSuccess(res.data))
        console.log(res.data)
        navigate('/login')
    } catch (err) {
        dispatch(registerFailure(err))
    }
}

export const login = async (dispatch,userCredentials,navigate,from) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', userCredentials)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
        navigate(from, {replace:true})
        
    } catch (err) {
        dispatch(loginFailure(err))
    }
}



export const logout = async (dispatch, navigate) => {
    try {
        dispatch(logoutSuccess())
    navigate('/')
    } catch (err) {
        console.log(err)
    }
}