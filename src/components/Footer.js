import React from "react";
import { Typography, Box } from "@material-ui/core";

function Footer() {
  return (
    <Box
      className="footer"
      display="flex"
      textAlign="center"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Typography id="text" style={{marginTop:"7px"}} variant="button" component="p">
        Website made using
      </Typography>
      <img
      id="text"
      alt="ReactJS logo"
        style={{ width: "100px", height: "33px",marginLeft:"10px"}}
        src={require("../images/reactlogo.png")}
      />
    </Box>
  );
}

export default Footer;
