import request from '@/utils/request'
import {getUser} from "../utils/auth";

const apiGateWay = 'base'
const api_name = 'label'

export default {
  topList() {
    return request({
      url: `/${apiGateWay}/${api_name}/toplist`,
      method: 'get'
    })
  }
}
