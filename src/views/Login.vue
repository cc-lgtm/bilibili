<template>
  <div class="login">
    <LoginTop middletop="登陆bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/register')">注册</div>
    </LoginTop>
    <LoginText label="账号"
    placeholder="请输入账号"
    style="margin:4.167vw 0"
    rule="^.{6,16}$"
    @inputChange="res => model.username = res"
    />
    <LoginText label="密码"
    type="password"
    placeholder="请输入密码"
    rule="^.{6,16}$"
    @inputChange="res => model.password = res"
    />
    <LoginBtn
    btntext="登陆"
    @registerSubmit="registerSubmit"
    />
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'
export default {
  name: 'login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  methods: {
    async registerSubmit () {
      const rule = /^.{6,16}$/
      if (rule.test(this.model.username) &&
          rule.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        this.$msg.fail(res.data.msg)
      } else {
        this.$msg.fail('格式不正确,重新输入')
      }
    }
  }
}
</script>

<style lang='scss'>

</style>
