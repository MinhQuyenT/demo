<template>
  <el-card shadow="always">
    <div>
      <el-button type="success" class="" @click="report" :disabled="disabled"
        >Báo Cáo</el-button
      >
      <el-button
        type="primary"
        class=""
        @click="getAllData"
        :disabled="disabled"
        >Tìm Kiếm</el-button
      >
      <el-card shadow="always">
        <avue-form :option="optionForm1" v-model="param"> </avue-form>
        <avue-form :option="optionForm2" v-model="param"> </avue-form>
      </el-card>
      <el-card shadow="always">
        <avue-crud
          :table-loading="loading"
          :option="option"
          :data="dataCrud"
          :page.sync="page"
          @on-load="getAllData"
        ></avue-crud>
      </el-card>
    </div>
  </el-card>
</template>

<script>
import http from "@/@score/api/home";
import { crudOp, formOp1, formOp2, configParam } from "./data";
// import { saveAs } from "file-saver";
export default {
  name: "HomeSection",
  components: {},
  data() {
    return {
      loading: false,
      result: null,
      element: null,
      disabled: false,
      form: {},
      optionForm1: formOp1(this),
      optionForm2: formOp2(this),
      param: {},
      page: {
        pageSize: 20,
        currentPage: 1,
        total: 0,
      },
      crud: false,
      option: crudOp(this),
      dataCrud: this.result,
    };
  },
  methods: {

    report() {
      var parameter = configParam(this.param);
      var params = new URLSearchParams(parameter).toString();
      var url = `http://192.168.5.1:91/api/whseFabricChangeAction/report${params?'?'+params:''}`;
      window.open(url,"Download")
    },

    async getAllData() {
      var parameter = configParam(this.param);
      this.loading = true;
      this.disabled = true;
      try {
        var res = await http.getData({
          page: this.page.currentPage,
          rows: this.page.pageSize,
          ...parameter,
        });
        if (res) {
          this.loading = false;
          this.disabled = false;
          var resPage = res.data;
          this.page = {
            pageSize: resPage.size,
            currentPage: resPage.current,
            total: resPage.total,
          };
          this.dataCrud = res.data.records;
        }
      } catch (err) {
        this.loading = false;
        this.disabled = false;
        console.error(err);
      }
    },

    onLoad(page) {
      page.currentPage === 1 ? this.page.currentPage : this.getAllData();
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped>
.v-card {
  width: 100%;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
  margin-top: 0px;
  label {
    font-size: 8px !important;
  }
}
.formEl {
  font-size: 8px !important;
  font-weight: bold;
}
.el-row {
  margin-bottom: 0 !important;
}
</style>
