import { http } from '@/utils/request'

export const userApi = {
  loginApi(data) {
    return http.request({
      method: 'post',
      url: '/user/login',
      auth: data
    })
  },
  test() {
    return http.request({
      method: 'get',
      url: '/user/handle'
    })
  }
}
