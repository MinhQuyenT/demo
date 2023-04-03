<template>
  <div id="app">
    <el-row :gutter="20">
      <!-- Header -->
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="18"
        ><div class="grid-content bg-purple">
          <div>
            <el-input
              placeholder="Please input"
              v-model="input3"
              class="input-with-select"
            >
              <el-select v-model="select" slot="prepend" placeholder="Select">
                <el-option label="Restaurant" value="1"></el-option>
                <el-option label="Order No." value="2"></el-option>
                <el-option label="Tel" value="3"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div></div
      ></el-col>
    </el-row>
    <el-row :gutter="20" >
      <!-- Nav -->
      <el-col :span="6" 
        ><div class="grid-content bg-purple nav-left">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item one</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="Group Two">
                <el-menu-item index="1-3">item three</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">item four</template>
                <el-menu-item index="1-4-1">item one</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span>Navigator Two</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <i class="el-icon-document"></i>
              <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span>Navigator Four</span>
            </el-menu-item>
          </el-menu>
        </div></el-col
      >
      <!-- Main -->
      <el-col :span="18"><div class="grid-content bg-purple main-right"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      input: "Hello ",
    };
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
}
.main-right{
  height: 1000px;
  background-color: #99a9bf;
}
</style>
