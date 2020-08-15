<template>
  <div id="app">
    <div id="nav">
      <router-link to="/element-data-add">添加元素据</router-link> |
      <router-link to="/tl-add">协议模板设计</router-link> |
      <router-link to="/person-detail">个人信息</router-link> |
      <router-link to="/login">Login</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
