<template>
  <div>
    <el-row :gutter="20" type="flex" justify="end">
      <el-col :span="4">
        <el-button
          style="width: 100px"
          type="primary"
          @click="
            PermissionsDialog = true
            permissionsFrom = {}
            dialogTitle = '新增权限'
          "
          >新增</el-button
        >
      </el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="center">
      <el-col :span="24">
        <el-table :data="roleList">
          <el-table-column label="角色id" width="150" prop="roleId"> </el-table-column>
          <el-table-column label="角色名称" width="150" prop="name"> </el-table-column>
          <el-table-column label="创建时间" prop="createTime"> </el-table-column>
          <el-table-column label="管理" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button type="primay" size="small" @click="handleDetail(scope.row)"
                >详细</el-button
              >
              <el-button type="danger" size="small" @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-dialog
      width="650px"
      class="dialog"
      title="权限控制"
      style="text-align: center"
      :visible.sync="rolePermissionsDialog"
      :before-close="handelClose"
    >
      <el-transfer
        :titles="['可添加权限', '已有权限']"
        style="text-align: left; display: inline-block"
        v-model="selectedPermissions"
        :data="permissionsDate"
      ></el-transfer>
      <el-button type="primary" style="margin-top: 10px" @click="updatePermissions"
        >更新权限</el-button
      >
    </el-dialog>
  </div>
</template>

<script>
import { adminApi } from '@/api/admin'

export default {
  data() {
    return {
      roleId: '',
      roleList: [],
      rolePermissionsDialog: false,
      permissionsDate: [],
      selectedPermissions: [],
      permissionsIdArray: []
    }
  },
  methods: {
    load() {
      adminApi.roleListApi().then((res) => {
        if (res) {
          this.roleList = res.data
        }
      })
    },
    loadPermissions() {
      adminApi.permissionsList().then((res) => {
        if (res) {
          let data = res.data.map((r) => {
            return { label: r.name, key: r.permissionsId }
          })
          this.permissionsDate = data
        }
      })
    },
    //详情
    async handleDetail(row) {
      if (this.permissionsDate.length === 0) {
        this.loadPermissions()
      }
      this.roleId = row.roleId
      await adminApi.rolePermissionsApi(row.roleId).then((res) => {
        if (res) {
          let permissionsIdArray = res.data.map((item) => item.permissionsId)
          this.selectedPermissions = permissionsIdArray
          this.permissionsIdArray = permissionsIdArray
        }
      })
      this.rolePermissionsDialog = true
    },
    updatePermissions() {
      let current = this.permissionsIdArray
      let select = this.selectedPermissions
      if (current.length == select.length) return
      if (current.length > select.length) {
        let diff = current.map((item) => {
          if (!select.includes(item)) {
            return {
              roleId: this.roleId,
              permissionsId: item
            }
          }
        })
        adminApi.batchDeleteRolePermissions(diff).then((res) => {
          if (res) {
            console.log(res)
          }
        })
      } else {
        let diff = select.map((item) => {
          if (!current.includes(item)) {
            return {
              roleId: this.roleId,
              permissionsId: item
            }
          }
        })
        adminApi.batchInsertRolePermissions(diff).then((res) => {
          if (res) {
            console.log(res)
          }
        })
      }
      this.$message.success('更新成功')
      this.rolePermissionsDialog = false
    },
    handleDelete(row) {
      console.log(row)
    },
    handelClose(done) {
      done()
    }
  },
  mounted() {
    this.load()
  }
}
</script>

<style scoped lang="scss">
.dialog {
  overflow-x: auto;
}
</style>
