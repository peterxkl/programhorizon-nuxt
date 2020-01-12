import request from '@/utils/request'
const apiGateWay = 'recruit'
const group_name = 'recruit'
const api_name = 'recruit'
export default {
  getList() {
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}`,
      method: 'get'
    })
  },
  search(page, size, searchMap) {
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}/search/${page}/${size}`,
      method: 'post',
      data: searchMap
    })
  },
  searchRecommend() {
    return request({
      url: `/${apiGateWay}/${group_name}/${api_name}/search/recommend`,
      method: 'get'
    })
  },
  searchNewList() {
    return request({
      url: `/${apiGateWay}/${group_name}/${api_name}/search/newList`,
      method: 'get'
    })
  },
  save(pojo) {
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    if (id === null || id === '') {
      return this.save(pojo)
    }
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `/${apiGateWay}/${api_name}/${api_name}/${id}`,
      method: 'delete'
    })
  }
}
