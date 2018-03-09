<template>
  <div>
    <button @click="changeVal" class="btn btn-default">点击改变</button>
    <input type="text" v-model="wd" class="form-control"/>
  </div>
</template>

<script>
  export default {
    props: {
      word: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        wd: this.word
      }
    },
    watch: {
      wd (newVal) {
        this.$emit('update:word', newVal)
      }
    },
    methods: {
      changeVal: function () {
        this.wd = ''
      }
    }
  }
</script>
