import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from 'axios'

export const login = async (dispatch,userCredentials) => {
    dispatch(loginStart())
    try {
        const res = await axios.post('http://localhost:5000/auth/login', userCredentials)
        dispatch(loginSuccess(res.data))
        console.log(res.data)
    } catch (err) {
        dispatch(loginFailure(err))
    }
}