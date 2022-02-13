import axios from "axios"


const BASE_URL = "http://localhost:5000"

const  TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDdlZDI4OTExNzdmNGViYWYwNDQxNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDc2MzgyOCwiZXhwIjoxNjQ1MDIzMDI4fQ.IgAD_lOIVm2SShNe9SzGrZ-32pXMm7ZUFZNgavhwc8I"

export const publicRequest = axios.create({
    baseURL : BASE_URL
})

export const userRequest = axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${TOKEN}`}
}) 

