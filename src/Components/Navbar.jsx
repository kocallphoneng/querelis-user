import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Navbar() {
  const state = useSelector((state) => state);
  const { requests } = state.user;
  const { welcome, accepted } = state.displayState;
  const dispatch = useDispatch();
  const { showNotification, showDetail_, setReqId } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const [text, setText] = useState("")
  const handleNotification = (e) => {
    e.preventDefault();
    showNotification();
  };
  const search = () => {
    requests.forEach(request => {
      
      if (text === request.cc_ticket_id) {
        console.log("match")
        setReqId(request.id);
        showDetail_();
      }
    })
  }
  return (
    <Box
      sx={{
        width: "calc(100vw - 289px)",
        height: "4rem",
        p: "0 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "white",
        boxShadow: "0px 4px 7px 3px #0000000A",
        position: "fixed",
        top: "0",
        right: "0",
        zIndex: "111",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "4rem",
          alignItems: "center",
        }}
      >
        {welcome ? (
          <Typography
            sx={{
              color: "#110C0C",
              fontSize: "1.2rem",
              fontWeight: "600",
            }}
            variant="h6"
            gutterBottom
            component="div"
          >
            Welcome To Your Dashboard
          </Typography>
        ) : (
          ""
        )}
        {accepted ? (
          <Box
            sx={{
              width: "486px",
              background: "#0257E6",
              display: "flex",
              padding: "0.5rem",
              borderRadius: "1rem",
              justifyContent: "space-between",
            }}
          >
            <SearchOutlinedIcon sx={{ width: "5%", color: "#fff" }} />
            <input
              className="search"
              placeholder="Ticket ID "
              style={{
                border: "none",
                outline: "none",
                width: "80%",
                color: "#fff",
                background: "transparent",
                padding: "0 1rem"
              }}
              value = {text}
              onChange={e=> setText(e.target.value)}
            />
            <button
              style={{
                border: "none",
                outline: "none",
                width: "15%",
                background: "#fff",
                color: "#0257E6",
                padding: "0 1rem",
                borderRadius: "1rem",
                cursor: "pointer"
              }}
              onClick={()=> search()}
            >
              Search
            </button>
          </Box>
        ) : (
          ""
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {localStorage.user === "support_staff" ? (
          <MailOutlineSharpIcon
            onClick={(e) => handleNotification(e)}
            sx={{
              mr: "2rem",
              color: "#C4C4C4",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          />
        ) : (
          ""
        )}

        <Avatar
          alt="user avatar"
          src="/user.jpg"
          sx={{
            mr: "1.5rem",
            boxShadow: "0px 4px 7px 3px #0000000A",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            p: "1rem 0",
            height: "100%",
          }}
        >
          <Typography
            sx={{
              color: "#110C0C",
              fontSize: "0.9rem",
              fontWeight: "600",
            }}
          >
            {localStorage.name}
          </Typography>
          <Typography
            sx={{
              color: "#110C0C",
              fontSize: "0.9rem",
              fontWeight: "100",
            }}
          >
            {localStorage.user === "support_staff"
              ? "Support Staff"
              : "Company"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
