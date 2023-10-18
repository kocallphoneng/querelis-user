import axios from "axios";

class authservice {
  base_url = "https://1492-154-160-11-180.ngrok-free.app";
  get_statistics = async () => {
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
  get_departments = async () => {
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
  get_department = async () => {
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
  get_staffs = async () => {
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
