<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="list in lists">1</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        lists: []
      }
    },
    created () {
      this.getList()
    },
    methods: {
      getList: function () {
        var prams = {
          wd: 'a'
        }
        this.$api.get('/5a1Fazu8AA54nxGko9WTAnF6hhy/su', prams, function (data) {
          console.log(data)
        })
      }
    }
  }
</script>
