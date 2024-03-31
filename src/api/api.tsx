import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5245",
    withCredentials: false
})

api.interceptors.response.use(

)

export default api