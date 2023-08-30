import { http } from '@/utils/request'

export const admimApi = {
  userListApi() {
    return http.get('/user')
  }
}
