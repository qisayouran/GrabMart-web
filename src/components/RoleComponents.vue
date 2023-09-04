<template>
  <div class="container">
    <div>
      <span>角色名称</span>
      <el-input v-model="localData.name"></el-input>
    </div>
    <el-button type="primary" @click="clickHandler">{{ title }}</el-button>
  </div>
</template>

<script>
import { adminApi } from '@/api/admin'

export default {
  props: {
    title: {
      type: String,
      default: '新增角色'
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      localData: this.data
    }
  },
  watch: {
    data: {
      handler(newVal) {
        this.localData = newVal
      },
      immediate: true // 组件创建时被调用
    }
  },
  methods: {
    clickHandler() {
      if (this.title == '新增角色') {
        this.addData()
      } else {
        this.updateData()
      }
    },
    updateData() {
      adminApi.updateRoleApi(this.localData).then((res) => {
        if (res) {
          this.$emit('updateData', '更新成功')
        }
      })
    },
    addData() {
      adminApi.addRoleApi(this.localData).then((res) => {
        if (res) {
          this.$emit('addData', '添加成功')
        }
      })
    }
  },
  created() {}
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      width: 100px;
    }
  }
  button {
    margin-top: 20px;
  }
}
</style>
