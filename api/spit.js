import request from '@/utils/request'

const apiGateWay = 'spit'
const api_name = 'spit'

export default {
  search(page, size, searchMap) {
    return request({ url: `/${apiGateWay}/${api_name}/search/${page}/${size}`, method: 'post', data: searchMap })
  },
  findById(id) {
    return request({ url: `/${apiGateWay}/${api_name}/${id}`, method: 'get' })
  },
  commentList(id, page, size) {
    return request({
      url: `/${apiGateWay}/${api_name}/comment/${id}/${page}/${size}`,
      method: 'get'
    })
  },
  thumbup() {
    return request({
      url: `/${apiGateWay}/${api_name}/thumbup/${id}`,
      method: 'put'
    })
  }
}
