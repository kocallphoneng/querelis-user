// import { toast } from "react-hot-toast";
import client from "../../Constants/helpers/axiosInstance";

export const authService = () => {
  const resetConfig = localStorage["reset-config"]
    ? JSON.parse(localStorage["reset-config"])
    : { email: "", otp: "" };

  const login = async (user) => {
    try {
      const res = await client.post("/login", user);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };

  const forgotPassword = async (email) => {
    try {
      const res = await client.post("/get-otp", { email: email });
      return { message: "success", data: res };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };

  const newPassword = async (passwords, firstTime) => {
    if (firstTime) {
      try {
        await client.post("/change-password", {
          email: localStorage.firstTimer,
          password: passwords.password,
          password_confirmation: passwords.cfPassword,
        });
        return { message: "success" };
      } catch (err) {
        return { message: "failed" };
      }
    } else {
      try {
        await client.post("/reset-password", {
          email: resetConfig.email,
          password: passwords.password,
          password_confirmation: passwords.cfPassword,
          token: resetConfig.otp,
        });
        return { message: "success" };
      } catch (err) {
        return { message: "failed", data: err.response.data };
      }
    }
  };

  return { login, forgotPassword, newPassword };
};