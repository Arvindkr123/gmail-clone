import React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LabelIcon from "@mui/icons-material/Label";
import "./emailList.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openMessage } from "../features/mailSlice";

const EmailBody = ({ name, message, time, subject, from }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goToMailPageAndReadMessage = () => {
    dispatch(
      openMessage({
        name,
        message,
        time,
        subject,
        from,
      })
    );
    navigate("/mail");
  };

  return (
    <div className="emailBody" onClick={() => goToMailPageAndReadMessage()}>
      <div className="emailBody__left">
        <CheckBoxOutlineBlankIcon />
        <StarBorderIcon />
        <LabelIcon />
        <h4>{name}</h4>
      </div>
      <div className="emailBody__middle">
        <div className="emailBody__middle--msg">
          <p>
            <b>{subject} </b>
            {message}
          </p>
        </div>
      </div>
      <div className="emailBody__right">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default EmailBody;
