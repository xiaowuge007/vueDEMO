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
        <button class="btn btn-success btn-log btn-block" @click="sub">登录</button>
      </div>

    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        username:'',
        password:''
      }
    },
    created:function(){

    },
    methods:{
      sub:function(){
        if((this.username == 'admin') && (this.password == 'admin')){
            alert('000')
          this.$router.push('/index')
          window.sessionStorage.setItem('session','admin')
        }
      }
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


</style>
