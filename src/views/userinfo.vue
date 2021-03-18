<template>
  <div class="userinfo">
    <Navbar />
    <img src="../../src/assets/bannerTop_new.png" class="backImg">
    <Userdetail />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Userdetail from '../components/userComponent/userDetail.vue'
export default {
  name: 'userinfo',
  components: {
    Navbar,
    Userdetail
  },
  methods: {
    async UserinfoData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        Headers: {
          'Authorization': 'Bearer' + localStorage.getItem('token')
        }
      })
      console.log(res)
    }
  },
  created () {
    this.UserinfoData()
  }
}
</script>

<style lang='scss'>
.userinfo {
  .backImg {
    height: 25.278vw;
    width: 100%;
  }
}
</style>
