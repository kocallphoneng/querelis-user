import axios from "axios";
import { useAppContext } from "../Context/AppContext";

export class staffService {
  base_url =  "http://146.190.120.240:8091/api/v1"
  context = useAppContext();
  getStaffs = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/users/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.context.setStaffs(res.data.data.users);
      return { message: "success", data: res.data };
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
      return { message: "success", data: res.data };
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
      return { message: "success", data: res.data };
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
      return { message: "success", data: res.data };
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
      return { message: "success", data: res.data };
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
      return { message: "success", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  reassignStaffDepartment = async (payload, uuid) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/users/user/${uuid}/department/reassign`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      this.getStaffs();
      return { message: "success", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
}
