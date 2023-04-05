import http from "@/utils/http-comon";

const api = {
  whseFabricChangeAction: "whseFabricChangeAction/view",
};

export function getData(parameter) {
  return http({
    url: api.whseFabricChangeAction,
    method: "get",
    params: parameter,
  });
}

const HomeService = {
  getData: getData,
};

export default HomeService;
