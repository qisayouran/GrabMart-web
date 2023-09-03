<template>
  <div>
    <el-row :gutter="10" type="flex" justify="space-around">
      <el-col class="input" :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
        <span>用户名</span>
        <el-input v-model="username"></el-input>
      </el-col>
      <el-col class="input" :xs="4" :sm="6" :md="8" :lg="6" :xl="11">
        <span>用户类型</span>
        <el-select v-model="type">
          <el-option
            v-for="(item, index) in roleList"
            :value="item.roleId"
            :label="item.name"
            :key="index"
          >
          </el-option>
        </el-select>
      </el-col>
      <el-col :span="6" style="display: flex; justify-content: center; align-items: center">
        <el-button type="primary" size="medium" @click="filter">筛选</el-button>
      </el-col>
    </el-row>
    <el-table :data="userList">
      <el-table-column label="用户id" prop="id"> </el-table-column>
      <el-table-column label="用户名" prop="username"> </el-table-column>
      <el-table-column label="昵称" prop="nikeName"> </el-table-column>
      <el-table-column label="创建时间" width="150" prop="createTime"> </el-table-column>
      <el-table-column label="最近登录" width="150" prop="loginTime"> </el-table-column>
      <el-table-column label="管理" width="120" fixed="right">
        <el-button>详细</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { adminApi } from '@/api/admin'

export default {
  data() {
    return {
      username: '',
      type: '',
      roleList: [],
      userList: []
    }
  },
  mounted() {
    this.load()
    this.loadUser(this.username, this.type)
  },
  methods: {
    filter() {
      this.loadUser(this.username, this.type)
    },
    load() {
      adminApi.roleListApi().then((res) => {
        if (res) {
          this.roleList = res.data
          this.roleList.unshift({ roleId: '', name: '全部' })
        }
      })
    },
    loadUser(username, type) {
      adminApi.userListApi(username, type).then((res) => {
        if (res) {
          this.userList = res.data.list
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.row {
  margin-bottom: 10px;
}
.input {
  display: flex;
  flex-direction: column;
  span {
    margin-bottom: 5px;
  }
}
</style>
