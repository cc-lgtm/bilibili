<template>
  <div class="loginTop">
    <div class="topber">
      <div></div>
      <div>{{middletop}}</div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginTop',
  props: ['middletop']
}
</script>

<style lang='scss'>
.loginTop {
  height: 12.5vw;
  background-color: white;
  display: flex;
    div {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 4.444vw;
    }
}
</style>
