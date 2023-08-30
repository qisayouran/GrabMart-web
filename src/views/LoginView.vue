<template>
  <div class="container">
    <el-row style="width: 100%" justify="center" type="flex">
      <el-col :xs="24" :sm="12" :md="12" :lg="6" :xl="12">
        <div class="title"><h2>用户登录</h2></div>

        <el-form ref="ruleForm" :rules="rules" :model="ruleForm" class="form" label-width="60px">
          <el-form-item label="用户名:" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码:" prop="password">
            <el-input v-model="ruleForm.password" type="password"></el-input>
          </el-form-item>
          <el-form-item>
            <div class="sub_form">
              <el-button :round="true" type="primary" @click="onSubmit('ruleForm')">登录</el-button>
              <el-button :round="true" @click="resetForm('ruleForm')">注册</el-button>
              <el-button :round="true" @click="resetForm('ruleForm')">取消</el-button>
            </div>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { userApi } from '@/api/user'
import router from '@/router'
export default {
  data() {
    let validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    var validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: validateUsername, trigger: 'blur' }],
        password: [{ validator: validatePassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          userApi.loginApi(this.ruleForm).then((res) => {
            if (res) {
              localStorage.setItem('token', btoa(res.data.token))
              this.$message.success('登录成功')
              router.push('/user')
            }
          })
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped lang="scss">
.container {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
}
.title {
  h2 {
    text-align: center;
  }
}
.el-col {
  background-color: rgba(255, 191, 191, 0.5);
  border-radius: 10px;
  min-height: 200px;
  padding: 20px;
}
.el-row {
  padding: 20px;
}
.sub_form {
  display: flex;
  button {
    flex: 1;
  }
}
</style>
