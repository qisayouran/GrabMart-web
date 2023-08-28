<template>
  <el-container>
    <el-header> header </el-header>
    <el-container style="display: flex; position: absolute; height: calc(100% - 60px); top: 60px">
      <MenuView class="el-menu" />
      <el-main> main </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuView from '@/views/user/MenuView.vue'
export default {
  components: { MenuView }
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  border-bottom: 2px solid rgb(192, 192, 192, 0.5);
}
.el-menu {
  height: 100%;
  box-sizing: border-box;
  overflow-x: hidden;
}
.el-main {
  flex: 1;
  overflow-x: hidden;
  box-sizing: border-box;
  padding: 15px 15px 0 15px;
  transition: all 0.6s;
}
</style>
