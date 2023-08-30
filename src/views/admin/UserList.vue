<template>
  <div>
    <el-table :data="userList">
      <el-table-column label="用户id" prop="id"> </el-table-column>
      <el-table-column label="用户名" prop="username"> </el-table-column>
      <el-table-column label="昵称" prop="nikeName"> </el-table-column>
      <el-table-column label="创建时间" width="150" prop="createTime"> </el-table-column>
      <el-table-column label="最近登录" width="150" prop="loginTime"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { admimApi } from '@/api/admin'

export default {
  data() {
    return {
      userList: []
    }
  },
  mounted() {
    admimApi.userListApi().then((res) => {
      if (res != null) {
        this.userList = res.data.list
      }
    })
  }
}
</script>

<style scoped lang="scss"></style>
