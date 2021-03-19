<template>
  <div class="userinfo">
    <Navbar />
    <img src="../../src/assets/bannerTop_new.png" class="backImg">
    <Userdetail :userInfo='model'/>
    <Userarticle />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import Userdetail from '../components/userComponent/userDetail.vue'
import Userarticle from '../components/userComponent/userArticle.vue'
export default {
  name: 'userinfo',
  data () {
    return {
      model: {}
    }
  },
  components: {
    Navbar,
    Userdetail,
    Userarticle
  },
  methods: {
    async UserinfoData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      this.model = res.data[0]
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
