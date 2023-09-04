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
        <el-table :data="permissionsList">
          <el-table-column label="权限id" prop="permissionsId"> </el-table-column>
          <el-table-column label="权限名称" prop="name"> </el-table-column>
          <el-table-column label="权限value" prop="value"> </el-table-column>
          <el-table-column label="权限uri" prop="uri"> </el-table-column>
          <el-table-column label="创建时间" width="150" prop="createTime"> </el-table-column>
          <el-table-column label="管理" width="150" fixed="right">
            <template slot-scope="scope">
              <el-button type="primay" size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button type="danger" size="small" @click="handleDelete(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>

    <el-dialog
      width="400px"
      :title="dialogTitle"
      :visible.sync="PermissionsDialog"
      :before-close="handelClose"
    >
      <el-form v-model="permissionsFrom">
        <el-row :gutter="20" type="flex" justify="center" align="middle" class="form">
          <el-col :span="6">
            <span>id</span>
          </el-col>
          <el-col :span="18">
            <el-form-item style="margin: 0" prop="permissionsId">
              <el-input
                placeholder="请输入数字"
                v-model.number="permissionsFrom.permissionsId"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <span>权限名称</span>
          </el-col>
          <el-col :span="18">
            <el-input v-model="permissionsFrom.name"></el-input>
          </el-col>
          <el-col :span="6">
            <span>权限value</span>
          </el-col>
          <el-col :span="18">
            <el-input v-model="permissionsFrom.value"></el-input>
          </el-col>
          <el-col :span="6">
            <span>权限uri</span>
          </el-col>
          <el-col :span="18">
            <el-input v-model="permissionsFrom.uri"></el-input>
          </el-col>

          <el-col class="form-button start" :span="12">
            <el-button type="warning" @click="PermissionsDialog = false">取消</el-button>
          </el-col>
          <el-col class="form-button end" :span="12">
            <el-button type="primary" @click="permissions">确认新增</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { adminApi } from '@/api/admin'

export default {
  data() {
    return {
      permissionsList: [],
      PermissionsDialog: false,
      permissionsFrom: {},
      dialogTitle: ''
    }
  },
  methods: {
    load() {
      adminApi.permissionsList().then((res) => {
        if (res) {
          this.permissionsList = res.data
        }
      })
    },
    handelClose(done) {
      done()
    },
    //新增权限`
    permissions() {
      if (this.dialogTitle === '修改权限') {
        adminApi.updatePermissionsApi(this.permissionsFrom).then((res) => {
          if (res) {
            this.$message.success('修改成功')
            this.load()
            this.PermissionsDialog = false
          }
        })
      } else {
        adminApi.addPermissionsApi(this.permissionsFrom).then((res) => {
          if (res) {
            if (res.data) {
              this.$message.success(res.msg)
              this.load()
            } else {
              this.$message.error(res.msg)
            }
            this.PermissionsDialog = false
          }
        })
      }
    },
    handleEdit(row) {
      this.PermissionsDialog = true
      this.dialogTitle = '修改权限'
      this.permissionsFrom = row
    },
    handleDelete(row) {
      adminApi.deletePermissionsApi(row.permissionsId).then((res) => {
        if (res) {
          this.$message.success('删除成功')
          this.load()
        }
      })
    }
  },
  mounted() {
    this.load()
  }
}
</script>

<style scoped lang="scss">
.form {
  flex-wrap: wrap;
  padding: 0 20px;
  .el-col {
    margin: 5px 0;
  }
  .form-button {
    display: flex;
    button {
      min-width: 100px;
    }
  }
  .start {
    justify-content: flex-start;
  }
  .end {
    justify-content: flex-end;
  }
}
</style>
