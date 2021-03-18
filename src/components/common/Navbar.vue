<template>
  <div class="navbar">
    <div class="logo">
      <img src="../../assets/logo.png">
    </div>
    <div>
      <p>
        请输入您需要输入的内容
        <i class="iconfont icon-icserch"></i>
      </p>
    </div>
    <div>
      <img src="../../assets/default_img.jpg">
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style lang='scss'>
.navbar {
  height: 12.5vw;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20.556vw;
      img {
        width: 70%;
      }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    p {
      font-size: 3.333vw;
      line-height: 7.222vw;
      text-align: right;
      position: relative;
      background-color: #f4f4f4;
      width: 90%;
      border-radius: 2.778vw;
      color: #aaa;
      height: 7.222vw;
      padding-right: 4.167vw;
      i {
        position: absolute;
        left: 2.878vw;
        top: 50%;
        transform: translate(-2.878vw, -50%);
        margin: 0 2.778vw;
        color: #aaa;
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 6.667vw;
      height: 6.667vw;
    }
    p {
      padding: 1.389vw 2.778vw;
      margin: 0 2.222vw;
      background-color: #fb7299;
      color: white;
      border-radius: 0.833vw;
      font-size: 3.611vw;
    }
  }
}
</style>
