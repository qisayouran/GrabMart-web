<template>
  <div>
    <div class="er">
      <div class="head404"></div>
      <div class="txtbg404">
        <div class="txtbox">
          <p>对不起，您请求的页面不存在、或已被删除、或暂时不可用</p>
          <div class="paddingbox">
            <p><a>返回上一页</a></p>
            <p><RouterLink action to="/">返回网站首页</RouterLink></p>
          </div>
          <el-upload :headers="test"></el-upload>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
.er {
  background-color: #494949;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.head404 {
  width: 580px;
  height: 234px;
  background: url(https://www.daixiaorui.com/Public/images/head404.png) no-repeat;
}

.txtbg404 {
  width: 499px;
  height: 169px;
  background: url(https://www.daixiaorui.com/Public/images/txtbg404.png) no-repeat;
}

.txtbg404 .txtbox {
  width: 390px;
  position: relative;
  top: 40px;
  left: 60px;
  color: #eee;
  font-size: 13px;

  .paddingbox {
    box-sizing: border-box;
    padding-top: 10px;
    text-align: center;
    margin-right: 30px;
  }
  p {
    box-sizing: border-box;
    margin: 5px 0;
    line-height: 18px;
    a {
      box-sizing: border-box;
      color: #eee;
      text-decoration: none;
    }

    a:hover {
      box-sizing: border-box;
      color: #fc9d1d;
      text-decoration: underline;
    }
  }
}
</style>
