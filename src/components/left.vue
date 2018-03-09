<template>
  <aside class="nav-left">
    <ul class="list-group">
      <li>
        <router-link class="list-group-item" to="/index/operation">运维管理</router-link>
        <ul class="list-group">
          <li>
            <router-link class="list-group-item item-two" to="{path:'/index/operation/page1',query: { id: 123 }}">page1</router-link>
          </li>
          <li>
            <a class="list-group-item item-two">page2</a>
          </li>
          <li>
            <a class="list-group-item item-two">page3</a>
          </li>
        </ul>
      </li>
      <li>
        <router-link  class="list-group-item" to="/index/system">系统管理</router-link>
      </li>
      <li><a class="list-group-item">监控管理</a></li>
      <li>
        <router-link class="list-group-item" to="/index/report">系统报表</router-link>
      </li>
      <li><a class="list-group-item">权限管理</a></li>
    </ul>
  </aside>
</template>

<style>
  .nav-left .list-group{
    margin-bottom:0;
  }
  .nav-left .list-group-item{
    background-color:#33485c;
    border:0;
    border-bottom:1px solid #374d63;
    margin-bottom:0;
    border-radius:0;
    color:#fff;
  }
  .nav-left .list-group-item:hover{
    background-color: #e74c3c;
    border-bottom:1px solid #374d63;
    color:#fff;
    cursor: pointer;
  }
  .nav-left .list-group-item.router-link-active{
    background-color: #e74c3c;
    color: #fff;
  }
  .nav-left  .item-two.list-group-item:hover{
    background-color: transparent;
    color: #e74c3c;
  }
  .nav-left  .item-two.list-group-item:router-link-active{
    color: #e74c3c;
  }
  .item-two.list-group-item{
    padding: 10px 40px;
  }
</style>
