<template>
  <div class="edit">
    <div style="margin-bottom: 10.001px">
      <NavBar />
    </div>
    <div class="headimg">
      <div class="uploadfile">
        <van-uploader preview-size='100vw' class="uploading" :after-read="afterRead" />
      </div>
      <EditBanner left='头像'>
        <img :src="model.user_img" slot="right" v-if="model.user_img">
        <img src="../../src/assets/default_img.jpg" slot="right" v-else>
      </EditBanner>
    </div>
    <EditBanner left='昵称' @bannerClick='show = true'>
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </EditBanner>
    <EditBanner left='账号'>
      <a href="javascript:;" slot="right">{{model.username}}</a>
    </EditBanner>
    <EditBanner left='性别' @bannerClick='gendershow = true'>
      <a href="javascript:;" slot="right">{{model.gender === 1 ? '男': '女'}}</a>
    </EditBanner>
    <EditBanner left='个人标签' @bannerClick='textshow = true'></EditBanner>
    <div class="editback" @click="$router.back()">返回个人中心</div>
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm='confirmclick' @cancel='text=""'>
      <van-field v-model="text" autofocus />
    </van-dialog>
    <van-dialog v-model="textshow" title="个人标签" show-cancel-button @confirm='textareaClick' @cancel='textarea=""'>
      <van-field v-model="textarea" type="textarea" autofocus />
    </van-dialog>
    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import NavBar from '../components/common/Navbar.vue'
import EditBanner from '../components/common/editBanner.vue'
export default {
  name: 'edit',
  data () {
    return {
      model: {},
      show: false,
      textshow: false,
      gendershow: false,
      text: '',
      textarea: '',
      actions: [
        { name: '男', val: 1 },
        { name: '女', val: 0 }
      ]
    }
  },
  components: {
    NavBar,
    EditBanner
  },
  methods: {
    async selectUser () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'))
      this.model = res.data[0]
    },
    async afterRead (file) {
      const formdata = new FormData()
      formdata.append('file', file.file)
      const res = await this.$http.post('/upload', formdata)
      this.model.user_img = res.data.url
      this.UserUpdate()
    },
    async UserUpdate () {
      const res = await this.$http.post('/update/' + localStorage.getItem('id'), this.model)
      if (res.data.code === 200) {
        this.$msg.fail('修改成功')
      }
    },
    confirmclick () {
      this.model.name = this.text
      this.UserUpdate()
      this.text = ''
    },
    textareaClick () {
      this.model.user_desc = this.textarea
      this.UserUpdate()
      this.textarea = ''
    },
    onSelect (data) {
      this.model.gender = data.val
      this.UserUpdate()
      this.gendershow = false
    }
  },
  created () {
    this.selectUser()
  }
}
</script>

<style lang='scss'>
.edit {
  a {
    color: #333;
  }
  .headimg {
    position: relative;
    overflow: hidden;
    img {
      height: 12.778vw;
      width: 12.778vw;
      border-radius: 50%;
    }
    .uploadfile {
      opacity: 0;
      position: absolute;
    }
  }
  .editback {
    margin-top: 5.556vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    padding: 4.167vw 0;
    font-size: 4vw;
  }
}
</style>
