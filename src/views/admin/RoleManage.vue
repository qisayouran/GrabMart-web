<template>
  <div>
    <el-table :data="roleList">
      <el-table-column label="角色id" prop="roleId"> </el-table-column>
      <el-table-column label="角色名称" prop="name"> </el-table-column>
      <el-table-column label="创建时间" width="150" prop="createTime"> </el-table-column>
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
      roleList: []
    }
  },
  methods: {
    load() {
      adminApi.roleListApi().then((res) => {
        if (res) {
          this.roleList = res.data
        }
      })
    }
  },
  mounted() {
    this.load()
  }
}
</script>

<style scoped lang="scss"></style>
