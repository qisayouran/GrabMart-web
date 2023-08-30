<template>
  <div id="test" class="animated-element">
    <el-menu :router="true" :default-active="activeIndex">
      <el-menu-item index="/admin">主页</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="/admin/users">用户列表</el-menu-item>
      <el-menu-item index="/admin/1">商家列表</el-menu-item>
      <el-menu-item index="/admin/">主页</el-menu-item>
    </el-menu>
    <el-button @click="test"></el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 'admin'
    }
  },
  mounted() {
    this.activeIndex = this.$route.path
  },
  methods: {
    test() {
      document.getElementById('test').classList.add('animate-leave-active')
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu-item {
  padding-right: 160px;
}

.animated-element {
  transition: all 1s ease;
}

.animate-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
  opacity: 0;
  width: 0;
}
</style>
