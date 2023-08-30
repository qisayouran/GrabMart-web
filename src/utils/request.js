import router from '@/router'
import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 30000, // 设置超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

/* 请求拦截器 */
service.interceptors.request.use(
  (config) => {
    const token = localStorage?.getItem('token')
    if (token) config.headers = { Authorization: 'Bearer ' + token }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/* 响应拦截器 */
service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    let message
    let status = error.response.status
    if (status === 500) {
      message = '内部服务器异常'
    } else {
      if (error.response.data.msg) {
        message = error.response.data.msg
      }
    }
    if ([401, 403].includes(status)) {
      router.push('/login')
    }
    Message({
      type: 'error',
      message: message
    })
    return null
  }
)

export const http = {
  get(url, params) {
    return service.request({
      method: 'get',
      url: url,
      params: params
    })
  },
  post(url, data) {
    return service.request({
      method: 'post',
      url,
      data
    })
  },
  put(url, data) {
    return service.request({
      method: 'put',
      url,
      data
    })
  },
  delte(url, data) {
    return service.request({
      method: 'delete',
      url,
      data
    })
  },
  request(config) {
    return service.request({
      ...config
    })
  }
}
