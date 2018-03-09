<template>
  <div>
    <div class="nav-box">
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Profile</a></li>
        <li role="presentation"><a href="#">Messages</a></li>
      </ul>
    </div>
    <div class="template-box">
      <form class="form-inline">
        <div class="form-group">
          <label for="exampleInputName2">Name</label>
          <input type="text" class="form-control input-sm" id="exampleInputName2" placeholder="Jane Doe">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail2">Email</label>
          <input type="email" class="form-control input-sm" id="exampleInputEmail2" placeholder="jane.doe@example.com">
        </div>
        <button class="btn btn-primary btn-xs">Search</button>
      </form>
      <div class="table-box">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Column1</th>
            <th>Column2</th>
            <th>Column3</th>
            <th>Column4</th>
            <th>Column5</th>
          </tr>
          </thead>
          <tbody>
          <tr class="active">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="success">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="warning">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="danger">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="info">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="warning">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="danger">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          <tr class="info">
            <td>第1列</td>
            <td>第2列</td>
            <td>第3列</td>
            <td>第4列</td>
            <td>第5列</td>
          </tr>
          </tbody>
        </table>
      </div>
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
        this.$api.get('/api/5a1Fazu8AA54nxGko9WTAnF6hhy/su', prams, function (data) {
          debugger
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
<style>

</style>
