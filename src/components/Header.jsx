import React from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { getAuth, signOut } from "firebase/auth";

import "./header.css";
import { useSelector } from "react-redux";
import { userSelect } from "../features/userSlice";
import { auth } from "../configFirebase/Firebase";
const Header = () => {
  const user = useSelector(userSelect);
  const logOut = () => {
    // alert("Logging out..."); // You can remove this alert if not needed.

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened.
        console.error("Sign-out error:", error);
      });
  };

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
        <Avatar
          style={{ cursor: "pointer" }}
          onClick={() => logOut()}
          src={user?.photoURL}
        ></Avatar>
      </div>
    </div>
  );
};

export default Header;
