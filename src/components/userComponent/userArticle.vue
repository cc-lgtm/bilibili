<template>
  <div class="userarticle">
    <div>
      <span>动态</span>
      <span>视频</span>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'userarticle'
}
</script>

<style lang='scss'>
.userarticle {
  background-color: white;
  padding: 15px;
  >div {
    display: flex;
    width: 30%;
    span {
      flex: 1;
      color: #999;
    }
  }
}
</style>
