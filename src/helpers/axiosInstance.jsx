import axios from "axios";

const client = axios.create({
  baseURL: "http://159.89.52.5/api"
});

client.interceptors.request.use(function (config) {
  config.headers["Authorization"] =
    "Bearer " + localStorage.getItem("accesstoken");
  return config;
});

export default client;
