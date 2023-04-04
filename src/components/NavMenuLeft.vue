<template>
    <div class="grid-content bg-purple nav-left">
          <el-menu
            v-for="item in menubar"
            :key="item.id"
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
                <i class="el-icon-s-home"></i>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item-group
                v-for="subItem in item.list"
                :key="subItem.id"
              >
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
        </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      input: "Hello ",
      menubar: [
        {
          id: 1,
          title: "Home",
          subtitle: "",
          desc: " lorem ipsum dolor ",
          list: [
            {
              id: 1,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 2,
              title: "lorem ipsum dolor",
            },
            {
              id: 3,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 4,
              title:
                " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ",
            },
            {
              id: 5,
              title: "lorem ipsum dolor",
            },
            {
              id: 6,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
          ],
          extra_title: "lorem ipsum dolor",
          extra_text:
            " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
          extra2_title: "lorem ipsum dolor",
          extra2_text: " lorem ipsum dolor lorem ipsum dolor ",
        },
        {
          id: 2,
          title: " лоремова 2 ",
          subtitle: " ипсума анатольевна ",
          desc: " lorem ipsum dolor ",
          list: [
            {
              id: 1,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 2,
              title: "lorem ipsum dolor",
            },
            {
              id: 3,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 4,
              title:
                " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ",
            },
            {
              id: 5,
              title: "lorem ipsum dolor",
            },
            {
              id: 6,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
          ],
          extra_title: "lorem ipsum dolor",
          extra_text:
            " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
          extra2_title: "lorem ipsum dolor",
          extra2_text: " lorem ipsum dolor lorem ipsum dolor ",
        },
        {
          id: 3,
          title: " лоремова 3 ",
          subtitle: " ипсума анатольевна ",
          desc: " lorem ipsum dolor ",
          list: [
            {
              id: 1,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 2,
              title: "lorem ipsum dolor",
            },
            {
              id: 3,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
            {
              id: 4,
              title:
                " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor ",
            },
            {
              id: 5,
              title: "lorem ipsum dolor",
            },
            {
              id: 6,
              title: "lorem ipsum dolor lorem ipsum dolor",
            },
          ],
          extra_title: "lorem ipsum dolor",
          extra_text:
            " lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolorlorem ipsum dolor lorem ipsum dolor ",
          extra2_title: "lorem ipsum dolor",
          extra2_text: " lorem ipsum dolor lorem ipsum dolor ",
        },
      ],
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