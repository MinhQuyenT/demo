import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.5.1:91/api",
  headers: {
    "Content-type": "application/json"
  }
});