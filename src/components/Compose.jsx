import React from "react";
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

import "./compose.css";

const Compose = () => {
  return (
    <div className="compose">
      {/* Compose header start */}
      <div className="compose__header">
        <div className="compose__header__left">
          <span>New Message</span>
        </div>
        <div className="compose__header__right">
          <RemoveIcon />
          <HeightIcon />
          <CloseIcon />
        </div>
      </div>
      {/* Compose header end */}

      <div className="compose__body">
        <div className="compose__bodyform">
          <input type="email" placeholder="Reciepents" />
          <input type="text" placeholder="Subject" />
          <textarea rows={20}></textarea>
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
    </div>
  );
};

export default Compose;
