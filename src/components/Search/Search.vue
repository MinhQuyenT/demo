<template>
  <el-form
    ref="form"
    :param="param"
    :border="true"
    :model="param"
    label-width="120px"
    class="formEl"
  >
    <el-row :span="24" class="rowel1">
      <el-col :span="5" class="item">
        <el-form-item label="缸号-Mã Hàng">
          <el-input v-model="param.vatNo"> {{ object }}</el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="事件起因">
          <el-input v-model="param.actionEffectEx"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="事件编号-Mã Số">
          <el-input v-model="param.actionCode"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="创建时间">
          <el-input v-model="param.createTime"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :span="24" class="rowel2">
      <el-col :span="5" class="item">
        <el-form-item label="载具编号-Pallet">
          <el-input v-model="param.storeLoad"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="载具编号-Vị Trí">
          <el-input v-model="param.storeLoad"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="创建人">
          <el-input v-model="param.creator"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="5" class="item">
        <el-form-item label="事件描述-Mô Tả">
          <el-input v-model="param.actionDesc"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  name: "SearchData",
  components: {},
  props: {
    object:String
  },
  data() {
    return {
      result: null,
      param: {},
      page: {
        pageSize: 20,
      },
    };
  },
};
</script>
