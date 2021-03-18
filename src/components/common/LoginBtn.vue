<template>
  <div class="loginBtn"
  @click="registerClick"
  >{{btntext}}</div>
</template>

<script>
export default {
  name: 'loginBtn',
  props: ['btntext'],
  methods: {
    registerClick () {
      this.$emit('registerSubmit')
    }
  }
}
</script>

<style lang='scss'>
.loginBtn {
  height: 12.5vw;
  background-color: #ff9db5;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.444vw;
  border-radius: 6.25vw;
  margin: 4.167vw 2.778vw;
}
</style>
