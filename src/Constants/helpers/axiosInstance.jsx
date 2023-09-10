import axios from "axios";

const client = axios.create({
  baseURL: "https://9b8d-154-160-11-180.ngrok-free.app/api",
});
client.interceptors.request.use(function (config) {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");

  return config;
});

export default client;
