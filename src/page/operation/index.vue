<template>
  <div>
    <ul class="list-group">
      <li class="list-group-item" v-for="list in lists">1</li>
    </ul>
    <div v-html="a" @click="go"></div>
    <Pagination
      :first="first"
      :last="last"
      :prev="prev"
      :next="next"
      :current-page="index"
      :total-items="totalItems"
      :items-per-page="pageItem"
      :max-num="maxNum"
      @change-num="changePage"
      @change-page-item = "changePageItem"
    >
    </Pagination>

  </div>
</template>

<script>
  import Pagination from '../../components/pagination.vue'
  export default {
    components: { Pagination },
    data () {
      return {
        lists: [],
        a: '',
        first: '首页',
        last: '尾页',
        prev: '上一页',
        next: '下一页',
        totalItems: 1,
        pageItem: 10,
        maxNum: 8,
        index: 1
      }
    },
    created () {
      this.a = '<button class="btn btn-default btn-sm">点击</button>'
      console.log('chuangjian')
      var self = this
      self.totalItems = 200
      setTimeout(function () {
        self.totalItems = 20
      })
    },
    mounted () {

    },
    methods: {
      getList: function () {
        var prams = {
          'wd': 'a'
        }
        this.$api.get('/su', prams, function (data) {
          alert(data)
          console.log(data)
        })
      },
      changePage: function (page) {
        alert(page)
        this.index = page
      },
      changePageItem: function (pageItems) {
        alert(pageItems)
        this.pageItem = pageItems
        this.index = 1
      },
      go: function () {
        this.totalItems = 600
      }
    }
  }
</script>
