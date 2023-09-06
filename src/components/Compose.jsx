import React, { useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import HeightIcon from "@mui/icons-material/Height";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import LinkIcon from "@mui/icons-material/Link";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PhotoIcon from "@mui/icons-material/Photo";
import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import AttachmentIcon from "@mui/icons-material/Attachment";
import { addDoc, serverTimestamp, collection } from "firebase/firestore";

import "./compose.css";
import { useDispatch } from "react-redux";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../configFirebase/Firebase";

const Compose = () => {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const hideComposeHandler = () => {
    dispatch(closeSendMessage());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (to === "") {
      return alert("to is required");
    }
    if (subject === "") {
      return alert("subject is required");
    }
    if (message === "") {
      return alert("message is required");
    }

    const data = {
      to: to,
      subject: subject,
      message: message,
      timestamp: serverTimestamp(),
    };
    // Add the data to the "mails" collection
    addDoc(collection(db, "mails"), data)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        alert("Email sent successfully");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        alert("An error occurred while sending the email");
      });
    setTo("");
    setSubject("");
    setMessage("");
    hideComposeHandler();

    alert("Email sent successfully");
  };

  return (
    <div className="compose">
      {/* Compose header start */}
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon onClick={hideComposeHandler} />
          <HeightIcon />
          <CloseIcon onClick={hideComposeHandler} />
        </div>
      </div>
      {/* Compose header end */}

      <form onSubmit={submitHandler}>
        <div className="compose__body">
          <div className="compose__bodyform">
            <input
              type="email"
              placeholder="Reciepents"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <textarea rows={20} onChange={(e) => setMessage(e.target.value)}>
              {message}
            </textarea>
          </div>
        </div>

        <div className="compose__footer">
          <div className="compose__footer_left">
            <button type="submit">
              Send <SendIcon />
            </button>
          </div>
          <div className="compose__footer_right">
            <FormatColorTextIcon />
            <AttachFileIcon />
            <AttachmentIcon />
            <InsertEmoticonIcon />
            <NoteAddIcon />
            <PhotoIcon />
            <PhonelinkLockIcon />
            <CreateIcon />
            <MoreVertIcon />
            <DeleteIcon />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Compose;
