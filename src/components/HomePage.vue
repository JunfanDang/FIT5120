
<template>
  <div>
  <el-container>
    <el-col :span="24">
    <el-carousel :interval="4000"  height= "694px">
    <el-carousel-item>
        <img src="../assets/1.jpg" class="carousel_image_type">
        <p>carbon</p>
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/2.jpg" class="carousel_image_type">
      </el-carousel-item>
      <el-carousel-item>
        <img src="../assets/3.jpg" class="carousel_image_type">
      </el-carousel-item>
  </el-carousel>
    </el-col>
</el-container>
  </div>
</template>

<script>

export default {
  /* eslint-disable */
  name: 'HomePage'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel_image_type{
     width: 100%;
  }

  
</style>
