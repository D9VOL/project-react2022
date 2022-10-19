import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjY2MmNiNDUzZjJhYjdlMmM0MzBiMDNlNzUwNTVhZiIsInN1YiI6IjYzNGE5OGE5ZTI2M2JiMDA5YzRmNDM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OUQveGiXBF1ohsrxIzujyHIma_0Avscoc2PEIKjhJFE'

axiosService.interceptors.request.use((config)=>{
    config.headers.Authorization = `Bearer ${token}`
    return config
})


export {
    axiosService
}