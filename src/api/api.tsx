import axios, { AxiosHeaders } from "axios";

const api = axios.create({
    baseURL: "http://localhost:5245",
    withCredentials: true
})



export default api