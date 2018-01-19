<template>
  <div>
    <Header></Header>
    <div class="articleContainer">
      <div class="leftContainer">
        <Left></Left>
      </div>
      <div class="centerContainer">
        <div class="center-header">

        </div>
        <div class="center-content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Header from '../components/header.vue'
  import Left from '../components/left.vue'
  export default {
    components: { Header, Left },
    data () {
      return {
        list: '5555'
      }
    },
    created () {
      console.log(this.$store.getters.token)
    },
    methods: {
      getData () {
        this.$api.get('topics', null, r => {
          this.list = r.data
        })
      }
    }
  }
</script>
