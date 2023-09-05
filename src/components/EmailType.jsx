import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import PeopleIcon from "@mui/icons-material/People";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import "./emailList.css";

const EmailType = () => {
  return (
    <div className="emailType">
      <div className="emailType__options emailType__options--active">
        <InboxIcon />
        <p>Primary</p>
      </div>
      <div className="emailType__options">
        <PeopleIcon />
        <p>Social</p>
      </div>
      <div className="emailType__options">
        <LocalOfferIcon />
        <p>Promotion</p>
      </div>
    </div>
  );
};

export default EmailType;
