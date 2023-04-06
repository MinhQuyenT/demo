export function crudOp() {
  return {
    addBtn: false,
    excelBtn: false,
    border: true,
    index: true,
    expandLevel: 1,
    tableLoading: true,
    headerAlign: "center",
    align: "center",
    page: true,
    refreshBtn: false,
    columnBtn: false,
    menuBtn: false,
    menu: false,
    disabled: false,
    tree: true,
    labelWidth: 100,
    height: "45vh",
    column: [
      {
        width: 120,
        label: "事件编号-Mã Số",
        prop: "actionCode",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "缸号-Mã Hàng",
        prop: "vatNo",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "事件起因-Thể Loại",
        prop: "actionEffectEx",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "事件起因",
        prop: "actionCauseEx",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "总匹数-T.Cây",
        prop: "pidNoS",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "合计净重量-Số cây",
        prop: "sumNetWeight",
        display: true,
      },
      {
        width: 130,
        label: "合计净重量",
        prop: "sumNetWeight",
        display: true,
      },
      {
        width: 200,
        label: "创建时间-Thời Gian",
        prop: "createTime",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "载具编号-Pallet",
        prop: "storeLoad",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "载具编号-Vị Trí",
        prop: "storeLocal",
        display: true,
      },
      {
        width: 200,
        label: "事件描述-Mô Tả",
        prop: "actionDesc",
        display: true,
        overHidden: true,
      },
      {
        width: 130,
        label: "创建人-Người Tạo",
        prop: "creator",
        display: true,
      },
    ],
  };
}

export function formOp1() {
  return {
    submitBtn: false,
    emptyBtn: false,
    fontSize: 8,
    menuBtn: false,
    fontWeight: "bold",
    padding: 0,
    column: [
      {
        label: "缸号",
        prop: "vatNo",
        value: "",
        name: "vatNo",
        span: 6,
      },
      {
        label: "事件起因",
        prop: "actionEffectEx",
        value: "",
        name: "actionEffectEx",
        span: 6,
      },
      {
        label: "事件编号",
        prop: "actionCode",
        value: "",
        name: "actionCode",
        span: 6,
      },
      {
        label: "创建时间",
        prop: "createTime",
        value: "",
        name: "createTime",
        span: 6,
      },
    ],
  };
}
export function formOp2() {
  return {
    submitBtn: false,
    emptyBtn: false,
    fontSize: 8,
    menuBtn: false,
    dialogCloseBtn: false,
    fontWeight: "bold",
    column: [
      {
        label: "载具编号",
        prop: "storeLoad",
        value: "",
        name: "storeLoad",
        span: 6,
      },
      {
        label: "货位码",
        prop: "storeLocal",
        value: "",
        name: "storeLocal",
        span: 6,
      },
      {
        label: "创建人",
        prop: "creator",
        value: "",
        name: "creator",
        span: 6,
      },
      {
        label: "事件描述",
        prop: "actionDesc",
        value: "",
        name: "actionDesc",
        span: 6,
      },
    ],
  };
}

export function configParam(parameter) {

  var param = parameter
  Object.keys(param).forEach((key) => {
    if (param[key] == null || param[key] == undefined || param[key] == "" || param[key] == key.includes("%")) {
      delete param[key];
    }
  })
  console.log(param);

  return param;
}
