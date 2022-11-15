import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from '@mui/icons-material/Forum';
import "../Style/header.css";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header-icon" />
      </IconButton>
      <img
        src="https://1000logos.net/wp-content/uploads/2019/06/tinder-logo.jpg"
        alt="logo"
        className="header-logo"
      />
      <IconButton>
        <ForumIcon  className="header-icon"/>
      </IconButton>
    </div>
  );
}

export default Header;
