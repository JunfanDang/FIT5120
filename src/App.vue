<template>
  <div id="app">
    <el-container >
      <el-header class="nav">
        <!-- nabigation -->
          <header-nav></header-nav>
      </el-header>
    <el-container>
      <el-main class="nav">
        <!-- Body -->
        <transition  name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </el-main>
    </el-container>
    </el-container>

  </div>
</template>

<script>
/* eslint-disable */
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
        headerNav: Header,        
      }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.nav{
  padding:0px;
}
.fade-enter-active, .fade-leave-active{
  transition: all .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
