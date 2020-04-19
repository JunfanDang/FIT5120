<template>
  <div>
    <el-container style="height: 694px; border: 1px solid #eee">
        <el-aside wide="300px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['3']">
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>fruit</template>
                <el-menu-item index="1-1">Apple</el-menu-item>
                <el-menu-item index="1-2">Pear</el-menu-item>
                <el-menu-item index="1-3">Plum</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>vegetables</template>
                <el-menu-item index="1-4">Potato</el-menu-item>
                <el-menu-item index="1-5">Carrot</el-menu-item>
                <el-menu-item index="1-6">Lettuce</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-menu"></i>Carbon sequester crops</template>
                <el-menu-item index="1-7">Corn</el-menu-item>
                <el-menu-item index="1-8">Soy</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-aside>
            <el-main>
            Tomato
            <br>
            Informations
            </el-main>
  </el-container>
  </div>
</template>

<script>
export default {
  name: 'Plants'
}
</script>

<style scoped>
</style>
