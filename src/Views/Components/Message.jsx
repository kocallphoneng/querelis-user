import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

function Message({setShowMsg}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "520px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Paper
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            maxWidth: "520px",
            mb: "0.5rem",
            ml: "1rem",
            p: "0.38rem",
            pl: "0.7rem",
          }}
          elevation={0}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="user avatar"
              src="/user.jpg"
              sx={{
                mr: "1.5rem",
                boxShadow: "0px 4px 7px 3px #0000000A",
              }}
            />
            <Typography
              sx={{
                color: "#110C0C",
                fontSize: "0.9rem",
                fontWeight: "600",
              }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Dindu Okonjo
            </Typography>
          </Box>
          <CloseFullscreenIcon onClick={()=> setShowMsg()} sx={{ color: "#0257E6", fontSize: "1.5rem", mr: "1rem", cursor: "pointer" }} />
        </Paper>
        <Paper
          sx={{
            margin: "2rem 1rem",
            p: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "#110C0C",
              fontSize: "0.8rem",
              fontWeight: "100",
              lineHeight: "2rem",
            }}
            variant="body2"
            gutterBottom
            component="div"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            perferendis sequi ea laborum, fugit non ipsum! Ullam libero enim,
            nobis accusantium maiores voluptate voluptates perferendis quia
            cupiditate ipsa placeat consequatur, eius, id quas impedit
            architecto adipisci ipsum? Quisquam quis corporis molestiae omnis
            earum asperiores commodi. Voluptatem reiciendis animi veniam
            numquam!
          </Typography>
        </Paper>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxWidth: "520px",
          display: "flex",
          alignItems: "center",
          p: "0 1rem",
          position: "fixed",
          bottom: "1rem",
        }}
      >
        <TextField
          id="outlined-textarea"
          label=""
          placeholder="Type here"
          multiline
          sx={{ width: "80%" }}
        />
        <Button variant="contained" sx={{ ml: "2rem", p: "1rem 1.5rem" }}>
          SEND
        </Button>
      </Box>
    </Box>
  );
}

export default Message;
