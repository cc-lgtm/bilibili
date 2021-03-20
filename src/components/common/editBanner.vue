<template>
  <div class="editbanner" @click="bannerClick">
    <div class="item">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'editbanner',
  props: ['left'],
  methods: {
    bannerClick () {
      this.$emit('bannerClick')
    }
  }
}
</script>

<style lang='scss'>
.editbanner {
  background-color: white;
  color: #333;
  padding: 4.167vw;
  font-size: 3.889vw;
  border-bottom: 0.278vw solid #fafafa;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .item {
    display: flex;
    align-items: center;
    width: 100%;
    span:nth-child(1) {
      width: 50%;
      flex: 1;
    }
  }
}
</style>
