<template>
  <b-card header-tag="header" footer-tag="footer" title="">
    <b-card-text>
      <avue-crud
        :crud="crud"
        :option="option"
        :data="data"
        :page.sync="page"
      ></avue-crud>
      <b-button variant="outline-primary" @click="getAllData()">Button</b-button>
    </b-card-text>
  </b-card>
</template>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
.card-body {
  background-color: beige;
}
</style>

<script>
import axios from "axios";
export default {
  name: "HomeSection",
  components: {},
  data() {
    return {
      page: {
        pageSize: 20,
      },
      crud: false,
      option: {
        addBtn:false,
        excelBtn: false,
        border: true,
        index: true,
        expandLevel: 1,
        headerAlign: "center",
        align: "center",
        tree: true,
        labelWidth: 100,
        column: [
          {
            width: 130,
            label: "事件编号-Mã Số",
            prop: "actionCode",
            display: true,
          },
          {
            label: "缸号-Mã Hàng",
            prop: "vatNo",
            display: true,
          },
          {
            label: "事件结果显示字段-Thể Loại",
            prop: "actionEffectEx",
            type: "icon",
            display: true,
          },
          {
            label: "事件起因",
            prop: "actionCauseEx",
            display: true,
          },
          {
            label: "总匹数-T.Cây",
            prop: "pidNoS",
            display: true,
          },
          {
            label: "合计净重量",
            prop: "sumNetWeight",
            display: true,
          },
          {
            label: "合计净重量",
            prop: "sumNetWeight",
            display: true,
          },
          {
            label: "创建时间",
            prop: "createTime",
            display: true,
          },
          {
            label: "载具编号-Vị Trí",
            prop: "storeLoad",
            display: true,
          },
          {
            label: "事件描述-Mô Tả",
            prop: "actionDesc",
            display: true,
          },
          {
            label: "创建人-Người Tạo",
            prop: "creator",
            display: true,
          },
        ],
      },

      data: [],
    };
  },
  methods: {

    fortmatResponse(res) {
      return JSON.stringify(res, null, 2);
    },

    async getAllData() {
      try {
        const api = {
          whseFabricChangeAction: "whseFabricChangeAction/view",
        };
        const res = await axios({
          baseURL: "http://192.168.5.1:91/api/"+ api.whseFabricChangeAction,
          method: "get",
        });
    
        console.log(res.data);
     //   this.getResult = this.fortmatResponse(result);
      } catch (err) {
        this.getResult = this.fortmatResponse(err.response?.data) || err;
      }
    },
  },
};
</script>
