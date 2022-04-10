import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Navbar() {
  const state = useSelector((state) => state);
  const { welcome, navBtn } = state.displayState;
  const { auth } = state.user;
  const dispatch = useDispatch();
  const { showEditForm, showNotification } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleNotification = (e) => {
    e.preventDefault();
    console.log(auth);
    showNotification();
  };
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
        {navBtn ? (
          <Button
            variant="contained"
            onClick={() => showEditForm()}
            sx={{
              p: "0.3rem 1.5rem",
              fontSize: "0.7rem",
              borderRadius: "0.7rem",
            }}
          >
            Registered Companies
          </Button>
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
            {localStorage.user === "support_staff"? "Support Staff": "Company"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
