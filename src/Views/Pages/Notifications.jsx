import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Message from "../Components/Message";
// import { useSelector } from "react-redux";

function Notication() {
  const [showMsg, setShowMsg] = useState(false);
  // const [info, setInfo] = useState({});
  // const state = useSelector(state => state)
  // const {companies} = state.user

  return (
    <Box>
      <Typography
        sx={{
          color: "#110C0C",
          fontSize: "1rem",
          fontWeight: "600",
          width: "100%",
        }}
        variant="h6"
        gutterBottom
        component="div"
      >
        Notification To Company
      </Typography>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "50%", textOverflow: "" }}>
          <Paper
            sx={{
              width: "100%",
              pl: "1.5rem",
              display: "flex",
              alignItems: "center",
              mb: "0.5rem",
            }}
            elevation={0}
          >
            <Typography
              sx={{
                color: "#110C0C",
                fontSize: "0.8rem",
                fontWeight: "600",
                width: "100%",
                p: "1rem 0",
              }}
            >
              All
            </Typography>
          </Paper>

          <Paper
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
              textOverflow: "ellipsis",
              overflow: "hidden",
              mb: "0.5rem",
              transition: "all",
              transitionDuration: "1000",
            }}
            onClick={() => setShowMsg(true)}
            elevation={0}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backround: "transparent",
                padding: "0.5rem",
                textOverflow: "ellipsis",
              }}
              onClick={(e) => {
                e.preventDefault();
                //   setShowMsg(true)
                // setInfo(company);
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  textOverflow: "ellipsis",
                  pr: "1rem",
                }}
              >
                <Avatar
                  alt="Remy Sharp"
                  src="/user.jpg"
                  sx={{ boxShadow: "0px 4px 7px 3px #0000000A" }}
                />
                <Box
                  sx={{
                    overflow: "hidden",
                    width: "100%",
                    textOverflow: "ellipsis",
                    ml: "1rem",
                    pr: "0.7rem",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#110C0C",
                      fontSize: "0.8rem",
                      fontWeight: "700",
                      width: "100%",
                      textTransform: "capitalize",
                    }}
                  >
                    Tester
                  </Typography>
                  <Box
                    sx={{
                      textOverflow: "ellipsis",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#110C0C",
                        fontSize: "0.8rem",
                        fontWeight: "100",
                        textOverflow: "ellipsis",
                        width: "4000px",
                        height: "1.5rem",
                      }}
                    >
                      {
                        "Yo Badman Badman..Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus elementum duis ut amet, ac eget metus quis nulla. Est tempus pellentesque diam eget duis mauris, integer. Et ut lacus, dignissim ullamcorper ultrices malesuada ullamcorper pretium. Nullam lobortis vel etiam et lorem sit id purus aliquet.. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus elementum duis ut amet, ac eget metus quis nulla. Est tempus pellentesque diam eget duis mauris, integer. Et ut lacus, dignissim ullamcorper ultrices malesuada "
                      }
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    color: "#0257E6",
                    fontSize: "0.6rem",
                    fontWeight: "600",
                    width: "100%",
                    textAlign: "end",
                  }}
                >
                  DD-MM-YYYY / 11:30AM
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        {showMsg ? (
          <Box
            sx={{
              width: "50%",
              postion: "relative",
              ml: "0.5rem",
              transition: "all",
              transitionDuration: "500",
            }}
          >
            <Box
              sx={{
                position: "fixed",
                height: "500px",
                right: "0",
                width: "38.5%",
              }}
            >
              <Message setShowMsg={setShowMsg} />
            </Box>
          </Box>
        ) : (
          ""
        )}
      </Box>
    </Box>
  );
}

export default Notication;
