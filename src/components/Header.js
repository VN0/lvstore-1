import React from "react";
import { Typography, Avatar, Box, IconButton } from "@material-ui/core";
import devPic from "../images/developer.webp";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ShopIcon from "@material-ui/icons/Shop";
import FacebookIcon from "@material-ui/icons/Facebook";
import "typeface-roboto";

const Header = ({ mainTitle, subTitle, buttonVisible, smoothScroll }) => {
  const fab = buttonVisible && (
    <IconButton
      style={{ position: "absolute", bottom: "30px" }}
      size="medium"
      aria-label="navigate"
      onClick={smoothScroll}
    >
      <KeyboardArrowDownIcon style={{ color: "white" }} />
    </IconButton>
  );

  const contactIcons = (
    <Box marginTop="10px" display="flex" justifyContent="center">
      <IconButton
        href="https://play.google.com/store/apps/dev?id=8738176098315595821"
        target="_blank"
        aria-label="play-store"
      >
        <ShopIcon id="icon" fontSize="medium" />
      </IconButton>
      <IconButton
        href="https://twitter.com/amsavarthanlv"
        target="_blank"
        aria-label="twitter"
      >
        <TwitterIcon id="icon" fontSize="medium" />
      </IconButton>
      <IconButton
        href="https://www.instagram.com/lvamsavarthan/"
        target="_blank"
        aria-label="instagram"
      >
        <InstagramIcon id="icon" fontSize="medium" />
      </IconButton>
      <IconButton
        href="https://www.facebook.com/lvamsavarthan"
        target="_blank"
        aria-label="facebook"
      >
        <FacebookIcon id="icon" fontSize="medium" />
      </IconButton>
      <IconButton
        href="https://github.com/lvamsavarthan/"
        target="_blank"
        aria-label="github"
      >
        <GitHubIcon id="icon" fontSize="medium" />
      </IconButton>
    </Box>
  );
  const bull = <span style={{ color: "#FFF" }}>&bull;</span>;
  return (
    <Box
      id="header"
      className="header"
      display="flex"
      textAlign="center"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Avatar style={{ height: "150px", width: "150px" }} src={devPic} />
      <Typography variant={mainTitle} component="h1">
        Amsavarthan Lv
      </Typography>
      <Typography variant={subTitle} component="h3">
        <span id="text" href="#header">
          Android Developer
        </span>{" "}
        {bull}{" "}
        <span id="text" href="#header">
          Front-End Web Developer
        </span>{" "}
        {bull}{" "}
        <span id="text" href="#header">
          Opensource Enthusiast
        </span>
      </Typography>
      {contactIcons}
      {fab}
    </Box>
  );
};

export default Header;
