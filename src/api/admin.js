import { http } from '@/utils/request'

export const adminApi = {
  userListApi(username, type) {
    return http.get(`/user?username=${username}&type=${type}`)
  },
  roleListApi() {
    return http.get('/role')
  },
  permissionsList() {
    return http.get('/permissions')
  },
  addPermissionsApi(data) {
    return http.post('/permissions', data)
  },
  deletePermissionsApi(id) {
    return http.delte(`/permissions/${id}`)
  },
  updatePermissionsApi(data) {
    return http.put('/permissions', data)
  }
}
