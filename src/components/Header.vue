<template>
  <div>
  <el-container>
    <el-header class="nav">
      <el-row>
        <el-col :span="10"><div class="grid-content bg-purple">
          <el-menu mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
             active-text-color="#ffd04b">
            <img src="../assets/Projectlogo.jpg" height="56px">
          </el-menu>
          </div>
        </el-col>
        <el-col :span="14">
          <div class="grid-content bg-purple-light">
          <el-menu :default-active="this.$route.path" router mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
             active-text-color="#ffd04b">
          <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            {{ item.navItem }}
          </el-menu-item>
          </el-menu>
          </div>
        </el-col>
      </el-row>
  </el-header>
</el-container>
</div>
</template>

<script>

export default {
  /* eslint-disable */
  name: 'Header',
  data() {
     return {
        navList:[
            {name:'/home',navItem:'Home'},
            {name:'/plants',navItem:'Plants'},
            {name:'/weather',navItem:'Weather'},
            {name:'/calculator',navItem:'Carbon Calculator'},
            {name:'/about',navItem:'About Us'},
        ]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;

  }
  .nav{
    padding:0px;
  }
  .el-aside {
    color: #333;
  }
  
</style>
