<template>
  <el-container>
    <el-header> <HeaderView /> </el-header>
    <el-container
      class="padding"
      style="display: flex; position: absolute; height: calc(100% - 60px); top: 60px"
    >
      <MenuView class="el-menu" />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderView from '@/views/admin/HerderView.vue'
import MenuView from '@/views/admin/MenuView.vue'
export default {
  components: { HeaderView, MenuView }
}
</script>

<style scoped lang="scss">
.el-container {
  height: 100%;
  width: 100%;
}
.el-header {
  padding: 0;
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
