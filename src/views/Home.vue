<template>
  <div class="home">
    <NavBar />
    <van-tabs v-model="active" scrollspy sticky>
      <van-tab v-for="(item, index) in category" :key="index" :title="item.title">
         <div v-if="active === index">
          <video-detail :detailitem='categoryitem' v-for="(categoryitem, categoryindex) in item.list" :key="categoryindex" />
         </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import NavBar from '../components/common/Navbar.vue'
import VideoDetail from './Detail.vue'
export default {
  name: 'home',
  data () {
    return {
      category: [],
      active: 0
    }
  },
  components: {
    NavBar,
    VideoDetail
  },
  methods: {
    async seletCategory () {
      const res = await this.$http.get('/category')
      this.changeCategory(res.data)
    },
    changeCategory (data) {
      const category = data.map((item, index) => {
        item.list = []
        item.page = 0
        item.pagesize = 10
        return item
      })
      this.category = category
      this.selectArticle()
    },
    async selectArticle () {
      const categoryItem = this.categoryItem()
      const res = await this.$http.get('/detail/' + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize
        }
      })
      categoryItem.list = res.data
    },
    categoryItem () {
      const categoryItem = this.category[this.active]
      return categoryItem
    }
  },
  watch: {
    active () {
      this.selectArticle()
    }
  },
  created () {
    this.seletCategory()
    this.selectArticle()
  }
}
</script>

<style lang='scss'>

</style>
