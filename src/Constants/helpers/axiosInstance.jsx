import axios from "axios";

const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  
});
client.interceptors.request.use(function (config) {
  config.headers["Authorization"] = "Bearer " + localStorage.getItem("token");
 
  return config;
});

export default client;
