import axios from 'axios'
import { URL_BASE_API_CEP } from '../constants/constants'
const api = axios.create({
    baseURL: URL_BASE_API_CEP
})

export default api