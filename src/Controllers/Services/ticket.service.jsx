import axios from "axios";
import { useAppContext } from "../Context/AppContext";

export class ticketService {
  base_url = process.env.REACT_APP_API_URL;
  // base_url =  "https://1987-154-160-17-69.ngrok-free.app/api/v1"
  context = useAppContext();
  getTickets = async () => {
    try {
      const res = await axios.get(this.base_url + "/app/tickets/list", {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      });
      this.context.setTickets(res.data.data.tickets);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
  getTicket = async (uuid) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/tickets/ticket/${uuid}/logs`,
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
  postComment = async (uuid, payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/tickets/ticket/${uuid}/add/comment`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      return { message: "success", data: res?.data };
    } catch (err) {
      return { message: "failed", data: err?.response?.data };
    }
  };
  assignTicket = async (payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/tickets/assign`,
        payload,
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
  assignTicketToUnit = async (payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/tickets/assign/unit`,
        payload,
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

  updateTicketStatus = async (uuid, payload) => {
    try {
      const res = await axios.post(
        this.base_url + `/app/tickets/ticket/${uuid}/update`,
        payload,
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
  getTicketLog = async (uuid, payload) => {
    try {
      const res = await axios.get(
        this.base_url + `/app/tickets/ticket/${uuid}/logs`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.token}`,
          },
        }
      );
      console.log("res lod", res);
      return { message: "success", data: res.data };
    } catch (err) {
      return { message: "failed", data: err.response.data };
    }
  };
}
