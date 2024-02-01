import axios from "axios";
import { useAppContext } from "../Context/AppContext";

export class departmentService {
  // base_url =  "http://146.190.120.240:8091/api/v1";
  base_url =  "https://1987-154-160-17-69.ngrok-free.app/api/v1"
  context = useAppContext();
  getDepartments = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/departments/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.context.setDepartments(res.data.data.departments);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getVendors = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/units/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.context.setDepartments(res.data.data.vendors);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getVendors = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/units/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.context.setDepartments(res.data.data.vendors);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getDepartment = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/departments/department/${uuid}`,
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
  getDepartmentUsers = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/units/users/${uuid}`,
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
  getDepartmentTickets = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/units/tickets/${uuid}`,
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
  createDepartment = async (payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/units/add`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      this.getDepartments();
      this.getDepartments();
      return { message: "success", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  createVendor = async (payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/units/add`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      this.getVendors();
      return { message: "success", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  getUnits = async (payload) => {
    try {
      const res = await axios.get(this.base_url + `/app/vendors/units`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.getVendors();
      return { message: "success", data: res.data };
    } catch (err) {
      console.log(err);
      return { message: "failed", data: null };
    }
  };
  getUnitsByVendor = async (vendorId) => {
    try {
      const res = await axios.get(this.base_url + `/app/units/options/${vendorId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
}
