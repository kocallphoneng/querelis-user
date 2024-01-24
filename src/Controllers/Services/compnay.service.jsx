import axios from "axios";

export class companyService {
  base_url =  "http://146.190.120.240:8091/api/v1";
  get_summary = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/dashboard/summary", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_monthly_data = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/dashboard/monthly", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_dashboard_category = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/dashboard/category", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_departments = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/departments/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_vendors = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/vendors/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_department = async (uuid) => {
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
  get_staffs = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/users/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_staff = async (staff_id) => {
    try {
      const res = await axios.get(this.base_url + "", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  get_tickets  = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/tickets/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  create_staff = async (user) => {
    try {
      const res = await axios.get(this.base_url + "", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  assign_ticket_to_staff = async (ticket_id, staff_id) => {
    try {
      const res = await axios.get(this.base_url + "", {
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
