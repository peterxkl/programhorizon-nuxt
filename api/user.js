import request from '@/utils/request'

const apiGateWay = 'user'
const api_name = 'user'

export default {
  sendSms(mobile) {
    return request({
      url: `/${apiGateWay}/${api_name}/sendsms/${mobile}`,
      method: 'get'
    })
  },
  register(user, code) {
    return request({
      url: `/${apiGateWay}/${api_name}/register/${code}`,
      method: 'post',
      data: user
    })
  },
  login(username, password) {
    return request({
      url: '/${apiGateWay}/${api_name}/login',
      method: 'post',
      data: {
        username,
        password
      }
    })
  },
  logout() {
    return request({
      url: '/${apiGateWay}/${api_name}/logout',
      method: 'post'
    })
  }
}

