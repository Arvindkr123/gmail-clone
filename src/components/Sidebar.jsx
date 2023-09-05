import React from "react";
import "./sidebar.css";
import { Avatar, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SidebarOptions from "./SidebarOptions";
import InboxIcon from "@mui/icons-material/Inbox";
import StarRateIcon from "@mui/icons-material/StarRate";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import SendIcon from "@mui/icons-material/Send";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DraftsIcon from "@mui/icons-material/Drafts";
import LabelIcon from "@mui/icons-material/Label";
import DeleteIcon from "@mui/icons-material/Delete";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import VideocamIcon from "@mui/icons-material/Videocam";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import AddAccount from "./AddAccount";
import { useDispatch } from "react-redux";
import { openSendMessage } from "../features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon />}
        onClick={() => dispatch(openSendMessage())}
        className="compose_btn"
      >
        Compose
      </Button>
      <SidebarOptions
        Icon={InboxIcon}
        title={"Inbox"}
        number="224"
        isactive={true}
      />
      <SidebarOptions Icon={StarRateIcon} title={"Starred"} number="224" />
      <SidebarOptions Icon={WatchLaterIcon} title={"Snoozed"} number="224" />
      <SidebarOptions
        Icon={LabelImportantIcon}
        title={"Important"}
        number="224"
      />
      <SidebarOptions Icon={SendIcon} title={"Sent"} number="224" />
      <SidebarOptions Icon={DraftsIcon} title={"Draft"} number="224" />
      <SidebarOptions Icon={LabelIcon} title={"Category"} number="224" />
      <SidebarOptions Icon={DeleteIcon} title={"[Map]/trash"} number="224" />
      <SidebarOptions Icon={FindInPageIcon} title={"Documents"} number="224" />
      <SidebarOptions Icon={ExpandMoreIcon} title={"More.."} number="224" />

      <div className="line"></div>

      <h3 className="sidebarOptions__Heading">Meet</h3>
      <SidebarOptions Icon={VideocamIcon} title={"New meeting"} />
      <SidebarOptions Icon={KeyboardIcon} title={"Join a meeting"} />
      <div className="line"></div>
      <h3 className="sidebarOptions__Heading">Hangouts</h3>
      <AddAccount />
    </div>
  );
};

export default Sidebar;
