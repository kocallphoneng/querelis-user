import axios from "axios";
import { useAppContext } from "../Context/AppContext";

export class staffService {
  base_url = process.env.REACT_APP_API_URL;
  // base_url =  "https://1987-154-160-17-69.ngrok-free.app/api/v1"
  context = useAppContext();
  getStaffs = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/users/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      if (res.data.response_code === "00") {
        this.context.setStaffs(res.data.data.users);
        return { message: "success", data: res.data };
      } else return { message: "failed", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getStaff = async (uuid) => {
    try {
      const res = await axios.get(this.base_url + `/app/users/user/${uuid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getStaffTickets = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/users/user/${uuid}/tickets`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getStaffTickets = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/users/user/${uuid}/tickets`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  createStaff = async (payload) => {
    console.log(payload);
    try {
      const res = await axios.post(this.base_url + `/app/users/add`, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.getStaffs();
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  updateStaff = async (payload, uuid) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/users/user/${uuid}/edit`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      this.getStaffs();
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  reassignStaffDepartment = async (payload, uuid) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/users/user/${uuid}/unit/reassign`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      this.getStaffs();
      if (res.data.response_code === "00")
        return { message: "success", data: res.data };
      else return { message: "failed", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
}
