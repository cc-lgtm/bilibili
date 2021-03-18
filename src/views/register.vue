<template>
  <div class="register">
    <LoginTop middletop="注册bilibili">
      <div slot="right" style="font-size:3.611vw" @click="$router.push('/login')">登陆</div>
    </LoginTop>
    <LoginText label="姓名" style="margin:4.167vw 0"
    placeholder="请输入姓名"
    rule="^.{6,16}$"
    @inputChange="res => model.name = res"
    />
    <LoginText label="账号"
    placeholder="请输入账号"
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
    btntext="注册"
    @registerSubmit="registerSubmit"
    />
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop.vue'
import LoginText from '../components/common/LoginText.vue'
import LoginBtn from '../components/common/LoginBtn.vue'
export default {
  name: 'register',
  data () {
    return {
      model: {
        name: '',
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
      if (rule.test(this.model.name) &&
          rule.test(this.model.username) &&
          rule.test(this.model.password)) {
        const res = await this.$http.post('/register', this.model)
        this.$msg.fail(res.data.msg)
        localStorage.setItem('id', res.data.id)
        localStorage.setItem('token', res.data.objtoken)
        setImmediate(() => {
          this.$router.push('/userinfo')
        }, 1000)
      } else {
        this.$msg.fail('格式不正确,重新输入')
      }
    }
  }
}
</script>

<style lang='scss'>

</style>
