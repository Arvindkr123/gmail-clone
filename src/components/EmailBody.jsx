import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelIcon from "@mui/icons-material/Label";
import "./emailList.css"

const EmailBody = () => {
  return (
    <div className="emailBody">
      <div className="emailBody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelIcon />
        <h4>Elon Musk</h4>
      </div>
      <div className="emailBody__middle">
        <div className="emailBody__middle--msg">
          <p>
            <b>Subject </b>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="emailBody__right">
        <p>2:30 AM</p>
      </div>
    </div>
  );
};

export default EmailBody;
