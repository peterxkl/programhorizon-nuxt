import axios from 'axios'
//创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9012',
    timeout: 30000
})
export default service
