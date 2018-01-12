<template>
  <div>
    <div class="loginBox">
      <div class="input-group">
        <span class="input-group-addon" id="username"><span class="glyphicon glyphicon-user"></span></span>
        <input type="text" v-model="username" class="form-control" placeholder="Username" />
      </div>
      <div class="input-group">
        <span class="input-group-addon" id="password"><span class="glyphicon glyphicon-lock"></span></span>
        <input type="password" v-model="password" class="form-control" placeholder="password" />
      </div>
      <div>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {
        username: '',
        password: ''
      }
    },
    created () {

    }
  }
</script>
<style>


  .loginBox{
    width:320px;
    height:200px;
    margin:150px auto;
  }
  .input-group{
    margin-bottom:10px;
  }


</sty
