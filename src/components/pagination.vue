<template>
  <nav class="paginationBox">
    <div class="pageBox">
      <span>{{totalItems}}</span>条
    </div>
    <div class="pageBox">
      共<span>{{numPages}}</span>页
    </div>
    <div class="pageBox">
      <div class="input-group input-group-sm jump">
        <input type="text" class="form-control" v-model="jumpNum">
        <span class="input-group-addon" @click="jump">跳转</span>
      </div>
    </div>
    <div class="perpageBox pageBox">
      <span>每页显示</span>
      <select class="form-control" v-model="itemsPerPageChange">
        <option v-for="val in vals" :value="val">{{val}}</option>
      </select>
    </div>
    <ul class="pagination">
      <li @click="firstStep">
        <a href="#" :class="{ disable: current === 1}" v-html="first">
        </a>
      </li>
      <li @click="prevStep">
        <a href="#" :class="{ disable: current === 1}" v-html="prev">
        </a>
      </li>
      <li v-for="list in lists" @click="changePage(list)" v-bind:class="{ active: current === list }">
        <a href="#">
          {{list}}
        </a>
      </li>
      <li @click="nextStep">
        <a href="#" :class="{ disable: currentPage === numPages}" v-html="next">
        </a>
      </li>
      <li @click="lastStep">
        <a href="#" :class="{ disable: currentPage === numPages}" v-html="last">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default{
    props: {
      first: {// 首页名称
        type: String,
        default: 'first'
      },
      last: {// 最后一页名称
        type: String,
        default: 'last'
      },
      prev: {// 上一页名称
        type: String,
        default: 'prev'
      },
      next: {// 下一页名称
        type: String,
        default: 'next'
      },
      totalItems: {// 总页数
        type: Number || String,
        default: 1
      },
      itemsPerPage: {// 每页显示条数
        type: Number || String,
        default: 10
      },
      maxNum: {
        type: Number || String,
        default: 8
      },
      currentPage: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        vals: [5, 10, 15, 20],
        itemsPerPageChange: this.itemsPerPage,
        current: this.currentPage,
        jumpNum: ''
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      itemsPerPageChange (curVal) {
        this.$emit('change-page-item', curVal)
      },
      currentPage (curVal) {
        this.current = curVal
      }
    },
    computed: {
      lists () {
        var lists = []
        if (this.numPages > this.maxNum) {
          var half = Math.ceil(this.maxNum / 2)
          var numLeft = this.current - half
          var numRight = this.current + half
          if (numLeft < 1) {
            if (this.maxNum % 2 === 1) {
              numRight = numRight - (this.current - half) - 1
            } else {
              numRight = numRight - (this.current - half)
            }
            numLeft = 1
          }
          if (numRight > this.numPages) {
            numRight = this.numPages
            numLeft = numRight - this.maxNum + 1
          }
          for (var j = numLeft; j <= numRight; j++) {
            lists.push(j)
          }
          if (lists.length > this.maxNum) {
            lists.splice(0, 1)
          }
        } else {
          for (var i = 0; i < this.numPages; i++) {
            lists.push(i + 1)
          }
        }
        return lists
      },
      numPages () {
        return Math.ceil(this.totalItems / this.itemsPerPage)
      }
    },
    methods: {
      init: function () {

      },
      changePage: function (index) {
        this.current = index
        this.$emit('change-num', this.current)
      },
      firstStep: function () {
        if (this.current !== 1) {
          this.changePage(1)
        }
      },
      lastStep: function () {
        if (this.current !== this.numPages) {
          this.changePage(this.numPages)
        }
      },
      prevStep: function () {
        if (this.current > 1) {
          this.changePage(this.current - 1)
        }
      },
      nextStep: function () {
        if (this.current < this.numPages) {
          this.changePage(this.current + 1)
        }
      },
      jump: function () {
        if (this.jumpNum !== null && this.jumpNum !== undefined) {
          var num = this.jumpNum.replace(/(^\s*)|(\s*$)/g, '')
          if (num !== '' && (num % 1) === 0) {
            num = parseInt(num)
            if (num > 0 && num <= this.numPages) {
              this.changePage(num)
            }
          }
        }
      }
    }
  }
</script>

<style>
  .paginationBox {
    overflow: hidden;
  }
  .pagination{
    float: right;
    margin:0;
  }
  .perpageBox {
    float: right;
  }
  .disable{
    cursor: not-allowed;
  }
  .perpageBox>span{
    float: left;
    line-height: 32px;
    margin: 0 8px;
  }
  .perpageBox .form-control {
    width:50px;
    height:30px;
    padding:5px 2px;
    margin-top:1px;
    float: left;
  }
  .pageBox{
    float: right;
    margin-right: 8px;
    line-height: 32px;
    font-size:12px;
  }
  .jump{
    width:80px;
    margin-top:1px;
  }
  .jump .input-group-addon{
    padding:5px 5px;
    background-color: #fff;
    color:#337ab7;
    cursor: pointer;
  }
</style>
