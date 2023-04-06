import http from "@/utils/http-comon";

const api = {
  view: "/view",
  report: "/report",
};

export function getData(parameter) {
  return http({
    url: api.view,
    method: "get",
    params: parameter,
  });
}
export function downloadReport(parameter) {
  return http(
    {
      url: api.report,
      method: "get",
      params: parameter,
    },
  )
}

const HomeService = {
  getData: getData,
  downloadReport: downloadReport,
};

export default HomeService;
