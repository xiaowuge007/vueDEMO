<template>
  <header class="header">

    <div class="btn-group">
      <span  class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span class="glyphicon glyphicon-user"></span>summer<span class="caret"></span>
      </span>
      <ul class="dropdown-menu">
        <li><a><span class="glyphicon glyphicon-cog"></span>设置</a></li>
        <li><a><span class="glyphicon glyphicon-list-alt"></span>个人信息1</a></li>
        <li role="separator" class="divider"></li>
        <li @click="exit"><a><span class="glyphicon glyphicon-off"></span>退出</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
  import Cookie from 'js-cookie'
  export default{
    methods: {
      exit: function () {
        Cookie.remove('token')
        var self = this
        this.$store.dispatch('logOut').then(function () {
          self.$router.push({path: '/login'})
        })
      }
    }
  }
</script>

<style>
  .header{
    height: 50px;
    background: #2a3b4c;
  }
  .header-message{
    float: right;
    margin-right:20px;
  }
  .btn-group{
    float: right;
    margin-right:50px;
    margin-top:6px;
  }
  .header .dropdown-menu{
    right:0;
    min-width: 100px;
  }
  .header .glyphicon {
    margin-right: 5px;
  }
  .header a{
    cursor: default;
  }
  .header .caret{
    margin-left:5px;
  }
</style>
