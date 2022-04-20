import axios from "axios";

let headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const client = axios.create({
  baseURL: "http://159.89.52.5/api",
  headers,
});
const setToken = () => {
  if (localStorage.accesstoken) {
    const token = localStorage.getItem("accesstoken");
    console.log(token);
    client.interceptors.request.use(
      (config) => {
        config.headers.authorization = `Bearer ${token}`;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
};
setToken();
export default client;
