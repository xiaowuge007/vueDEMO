<template>
  <div class="selectBox ">
    <input @blur="hideList" id="aaaa" @focus="showList" type="text" placeholder="请选择" class="form-control select-input" v-model="keyword"/>
    <span @click="showListAndFocus" class="selectIcon"><span class="glyphicon glyphicon-menu-down"></span></span>
    <div class="selectList" v-show="flag" @click.stop>
      <ul class="list-group">
        <li v-show="isShow(li.text)" :class="['list-group-item', {'item-success': keyword === li.text}]" @mousedown="selectItem(li.name, li.text)" v-for="li in lis" :name="li.name">
          {{li.text}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      lis: {
        default: []
      },
      kw: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        keyword: this.kw,
        flag: false
      }
    },
    mounted () {

    },
    watch: {
      keyword (newval) {
        this.keywordChange('', newval)
      }
    },
    methods: {
      isShow (val) {
        let isFlag = true
        let value = this.keyword.replace(/(^\s*)|(\s*$)/g, '')
        if (value && val.indexOf(value) < 0) {
          isFlag = false
        }
        return isFlag
      },
      showList: function () {
        this.flag = true
      },
      showListAndFocus: function () {
        let inputA = document.getElementById('aaaa')
        this.flag = true
        inputA.focus()
      },
      hideList: function () {
        this.flag = false
      },
      selectItem: function (name, text) {
        this.keyword = text
        this.flag = false
        this.keywordChange(name, text)
      },
      keywordChange: function (name, text) {
        this.$emit('select-change', name, text)
      }
    }
  }
</script>

<style>
  .selectBox{
    width: 260px;
    padding-right: 24px;
    position: relative;
  }
  .selectIcon{
    position: absolute;
    top:0;
    right: 0;
    border: 1px solid #ccc;
    height: 26px;
    line-height: 26px;
    text-align: center;
    width:24px;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    color: #888;
    background: #f3f3f3;
  }
  .selectIcon:hover{
    background:#e8e8e8;
    color: #333;
  }
  .select-input.form-control{
    height:26px;
    padding:2px 10px;
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }
  .selectList{
    width:100%;
    position: absolute;
    top: 26px;
    font-size: 12px;
    word-wrap:break-word;
    z-index: 9999;
  }
  .selectList.scroll-x{
    overflow-x: scroll;
  }
  .selectList.scroll-y{
    overflow-y: scroll;
  }
  .selectList .list-group-item{
    padding: 5px 10px;
    cursor: default;
  }
  .selectList .list-group-item.item-success{
    background-color: #eee;
  }
  .selectList .list-group-item:hover{
    background: #eee;
  }
</style>
