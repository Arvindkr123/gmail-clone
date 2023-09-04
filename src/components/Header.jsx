import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="left-header">
        <IconButton>
          <ReorderIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail-new"
        />
      </div>
      <div className="middle-header">
        <div className="search_mail">
          <SearchIcon>
            <ReorderIcon />
          </SearchIcon>
          <input type="text" placeholder="Search mail..." />
          <ExpandMoreIcon>
            <ReorderIcon />
          </ExpandMoreIcon>
        </div>
      </div>
      <div className="right-header">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://imgs.search.brave.com/0z1D-YLl2gidC3SkGbvj2wShDDWhj-hjenh5nQs2rcE/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vMDUvMjM2NTA1/LTA1MC0xN0I2RTM0/QS9FbG9uLU11c2st/MjAyMi5qcGc_dz00/MDAmaD0zMDAmYz1j/cm9w"></Avatar>
      </div>
    </div>
  );
};

export default Header;
