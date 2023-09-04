import { http } from '@/utils/request'

export const adminApi = {
  userListApi(username, type) {
    return http.get(`/user?username=${username}&type=${type}`)
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
  },
  roleListApi() {
    return http.get('/role')
  },
  addRoleApi(data) {
    return http.post('/role', data)
  },
  deleteRoleApi(id) {
    return http.delte(`/role/${id}`)
  },
  updateRoleApi(data) {
    return http.put('/role', data)
  },
  rolePermissionsApi(id) {
    return http.get(`/role-permissions/${id}`)
  },
  batchInsertRolePermissions(data) {
    return http.post('/role-permissions/batches', data)
  },
  batchDeleteRolePermissions(data) {
    return http.delte('/role-permissions/batches', data)
  }
}
