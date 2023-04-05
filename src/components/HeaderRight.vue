<template>
  <div class="grid-content bg-purple header-right">
    <div>
      <el-input
        placeholder="Please input"
        v-model="input"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="Select">
          <el-option label="Restaurant" value="1"></el-option>
          <el-option label="Order No." value="2"></el-option>
          <el-option label="Tel" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return { 
      input: "Hello",
      select:[]
     };
  },
};
</script>
