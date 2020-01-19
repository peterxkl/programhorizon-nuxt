import request from '@/utils/request'
import {getUser} from "../utils/auth";

const apiGateWay = 'qa'
const api_name = 'problem'

export default {
  list(type,label,page,size) {
    return request({
      url: `/${apiGateWay}/${api_name}/${type}/${label}/${page}/${size}`,
      method: 'get'
    })
  }
}
