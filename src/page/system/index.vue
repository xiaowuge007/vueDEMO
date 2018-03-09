<template>
  <div>
    <ul class="nav nav-tabs">
      <li role="presentation" class="active"><a href="#">Home</a></li>
      <li role="presentation"><a href="#">Profile</a></li>
      <li role="presentation"><a href="#">Messages</a></li>
    </ul>
    <button @click="getVal" class="btn btn-primary">获取</button>
    这里是系统管理
    <mal-input :word="wd" @update:word="val => wd = val"></mal-input>
    <div style="height:30px"></div>
    <input type="text" v-focus>
  </div>
</template>

<script>
  import malInput from '../../components/input.vue'
  export default {
    components: { malInput },
    data () {
      return {
        wd: ''
      }
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    },
    methods: {
      getVal: function () {
        alert(this.wd)
      }
    }
  }
</script>
