<template>
  <div id="app">
    <el-row :gutter="20">
      <!-- Header -->
      <el-col :span="6"><div class="grid-content bg-purple header-logo"></div></el-col>
      <el-col :span="18"
        ><div class="grid-content bg-purple header-right">
          <div>
            <el-input placeholder="Please input"
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
          </div></div
      ></el-col>
    </el-row>
    <el-row :gutter="20" >
      <!-- Nav -->
      <el-col :span="6" 
        ><div class="grid-content bg-purple nav-left">
          <el-menu v-for="item in menubar" :key="item.id"
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-home"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group  v-for="subItem in item.list" :key="subItem.id">
                <el-menu-item index="1-1">{{ subItem.title }}</el-menu-item>
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
      menubar:[{
        id: 1,
        title: "Home",
        subtitle: "",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      },
      {
        id: 2,
        title: " лоремова 2 ",
        subtitle: " ипсума анатольевна ",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      },
      {
        id: 3,
        title: " лоремова 3 ",
        subtitle: " ипсума анатольевна ",
        desc: " lorem ipsum dolor ",
        list: [
          {
            id: 1,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 2,
            title: "lorem ipsum dolor"
          },
          {
            id: 3,
            title: "lorem ipsum dolor lorem ipsum dolor"
          },
          {
            id: 4,
            title:
              " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor "
          },
          {
            id: 5,
            title: "lorem ipsum dolor"
          },
          {
            id: 6,
            title: "lorem ipsum dolor lorem ipsum dolor"
          }
        ],
        extra_title: "lorem ipsum dolor",
        extra_text:
          " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
        extra2_title: "lorem ipsum dolor",
        extra2_text: " lorem ipsum dolor lorem ipsum dolor "
      }]
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
  padding-right: 0!important;
}
.main-right{
  height: 1000px;
  background-color: #99a9bf;
  padding-right: 0!important;
}

.header-logo{
  height: 75px;
}
.header-right{
  height: 75px;
}
.el-input-group{
  width: 50%!important;
  padding: 17px;
}
</style>
