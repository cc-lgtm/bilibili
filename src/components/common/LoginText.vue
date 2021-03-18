<template>
  <div class="loginText">
    <van-field
    :label="label"
    :type="type"
    :placeholder="placeholder"
    :rule="rule"
    v-model="content"
    />
  </div>
</template>

<script>
export default {
  name: 'loginText',
  props: ['label', 'type', 'placeholder', 'rule'],
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handlerulg () {
      const rule = new RegExp(this.rule)
      if (rule.test(this.content)) {
        this.$emit('inputChange', this.content)
      }
    }
  },
  watch: {
    content () {
      this.handlerulg()
    }
  }
}
</script>

<style lang='scss'>

</style>
