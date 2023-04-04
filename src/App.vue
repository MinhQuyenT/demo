<template>
  <v-app>
    <el-row :gutter="20">
      <!-- Header -->
      <el-col :span="3">
        <headerleft/>
      </el-col>
      <el-col :span="21">
        <headerright/>
        </el-col>
    </el-row>
    <el-row :gutter="20">
      <!-- Nav -->
      <el-col :span="3">
        <navmenuleft :color="color"/>
      </el-col>
      <!-- Main -->
      <el-col :span="21" >
    <homesection></homesection>
      </el-col>
    </el-row>
  </v-app>
</template>

<script>
import navmenuleft from "./components/NavMenuLeft.vue";
import headerleft from "./components/HeaderLeft.vue";
import headerright from "./components/HeaderRight.vue";
import homesection from "./components/HomeSection.vue";
export default {
  name: "App",
  components: {
    navmenuleft,
    headerleft,
    headerright,
    homesection,
  },
  data() {
    return {input: "Hello",};
  },

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss">
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  padding-right: 0;
  background-color: #f9fafc;
}
.el-select .el-input {
  width: 85px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

// css custom
.nav-left {
  height: 1000px;
  background-color: #99a9bf;
  padding-right: 0 !important;
}
.main-right {
  height: 1000px;
  background-color: #99a9bf;
  padding-right: 0 !important;
}

.header-logo {
  height: 75px;
}
.header-right {
  height: 75px;
}
.el-input-group {
  width: 50% !important;
  padding: 17px;
}
</style>
