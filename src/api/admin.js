import { http } from '@/utils/request'

export const adminApi = {
  userListApi(username, type) {
    return http.get(`/user?username=${username}&type=${type}`)
  },
  roleListApi() {
    return http.get('/role')
  }
}
