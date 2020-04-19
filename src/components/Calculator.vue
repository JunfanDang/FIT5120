<template>
  <div class="note" :style ="note">
      <br>
    <el-row>
        <el-col :span="24" text-align: center>
            <div class="title">
                <h1>Carbon Calculator</h1>
            </div>
        </el-col>
    </el-row>
    <br>
    <el-row>
    <el-col :span="24" text-align: center>
        <div class="calculate">
            <div>Please choose your suburb :
                <el-autocomplete
                class="inline-input"
                v-model="state1"
                :fetch-suggestions="querySearch"
                placeholder="suburb"
                @select="handleSelect"
                ></el-autocomplete>
            </div>
        <br>
        <div>Please choose your Fruit or Vegetables :
            <el-select v-model="value" placeholder="Select">
                <el-option-group
                v-for="group in options"
                :key="group.label"
                :label="group.label">
                <el-option
                    v-for="item in group.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
                </el-option-group>
            </el-select>
            <el-input-number v-model="num" :step="100" :min="0" :max="10000"></el-input-number> gram
        </div>
        </div>
    </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Calculator',
    data() {
      return {
        restaurants: [],
        state1: '',
        options: [{
          label: 'Vegetable',
          options: [{value: '30',label: 'lettuce'},
                    {value: '30',label: 'Potato'}]},{
          label: 'Friut',
          options: [{ value: '30',label: 'Apple'}, 
                    { value: '30',label: 'Plum'},
                    { value: '30',label: 'Pear'}, 
                    {value: '30',label: 'Cherry'}]
        }],
        value: '',
        num: '0',
        note: {
            backgroundImage: "url(" + require("../assets/1.jpg") + ")",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          },
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // callback return the suggest data
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "Clayton", "address": "111" },
          { "value": "Caulfield", "address": "222" },
          { "value": "Melbourne", "address": "333" },
          { "value": "Frankston", "address": "444" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
}
</script>

<style scoped>
.calculate{
    width: 800px;
    text-align:left;
    background-color: mediumaquamarine;
    border-radius: 25px;
    padding: 20px;
    margin: 0 auto
}
.title{
    width: 800px;
    text-align: center;
    border-radius: 25px;
    background-color: mediumaquamarine;
    padding: 20px;
    margin: 0 auto
}
.note{
    height: 694px;
}
</style>
