import React from "react";
import "./emailDetails.css";
import EmailListSetting from "./EmailListSetting";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import { Avatar, IconButton } from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import LaunchIcon from "@mui/icons-material/Launch";
import StarIcon from "@mui/icons-material/Star";
import ReplyIcon from "@mui/icons-material/Reply";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectedMessage } from "../features/mailSlice";

const EmailDetails = () => {
  const navigate = useNavigate();
  const { name, message, time, subject, from } = useSelector(selectedMessage);
  console.log(name, message, time, subject);

  const backHomePage = () => {
    navigate("/");
  };
  return (
    <div className="emailDetails">
      <EmailListSetting
        backHomePage={backHomePage}
        backIcon={<ArrowBackIcon />}
      />
      <div className="emailDetails_message">
        {/* Email Details header start  */}
        <div className="emailDetail__header">
          <div className="emailDetail__header__left">
            <h4>{subject && subject}</h4>
            <IconButton>
              <LabelImportantIcon />
            </IconButton>
          </div>
          <div className="emailDetail__header__right">
            <IconButton>
              <LocalPrintshopIcon />
            </IconButton>
            <IconButton>
              <LaunchIcon />
            </IconButton>
          </div>
        </div>
        {/* Email Details header END  */}

        {/* Email Details Middle Part start */}
        <div className="emailDetail__middle">
          <div className="emailDetail__middle__left">
            <IconButton>
              <Avatar></Avatar>
            </IconButton>
            <h4>{name && name}</h4>
            <p>{from && from}</p>
          </div>
          <div className="emailDetail__middle__right">
            <p>{time && time}</p>
            <IconButton>
              <StarIcon />
            </IconButton>
            <IconButton>
              <ReplyIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        {/* Email Details Middle Part end */}

        {/* Email Details Body Part Start */}
        <div className="emailDetails_body">
          <p>{message && message}</p>
        </div>
        {/* Email Details Body Part End */}
      </div>
    </div>
  );
};

export default EmailDetails;
