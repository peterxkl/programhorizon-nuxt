import axios from 'axios'
import {getUser} from "./auth";
//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9012',
    timeout: 30000,
    headers: {'Authorization': 'Bearer '+getUser().token}
})
export default service
