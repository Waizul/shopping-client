
import { publicRequest } from '../requestMethods'

import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./userRedux"

export const login = async (dispatch,userCredentials,navigate) => {
    dispatch(loginStart())
    try {
        const res = await publicRequest.post('/auth/login', userCredentials)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
        navigate('/')
    } catch (err) {
        dispatch(loginFailure(err))
    }
}

export const register = async (dispatch,userInfo,navigate) => {
    dispatch(registerStart())
    try {
        const res = await publicRequest.post('/auth/register', userInfo)
        dispatch(registerSuccess(res.data))
        console.log(res.data)
        navigate('/login')
    } catch (err) {
        dispatch(registerFailure(err))
    }
}