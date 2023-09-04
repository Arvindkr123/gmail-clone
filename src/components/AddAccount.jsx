import { Avatar } from "@mui/material";
import React from "react";
import "./account.css"
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AddAccount = () => {
  return (
    <div className="account">
      <Avatar src="https://imgs.search.brave.com/VguJvu98HWvHvlxXcblMTcmvNYBGYI4aOLfN9Lcky_E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTIy/OTg5MjQyMS9waG90/by9iZXJsaW4tZ2Vy/bWFueS1kZWNlbWJl/ci0wMS1zcGFjZXgt/b3duZXItYW5kLXRl/c2xhLWNlby1lbG9u/LW11c2stYXJyaXZl/cy1vbi10aGUtcmVk/LWNhcnBldC1mb3Iu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhSZW8yWDBPZllN/MmxQV1ZWTHlTOWt1/S243TmJNRnk2MVhT/c3NlZVJOUTg9"></Avatar>
      <p>
        Elon Musk <ExpandMoreIcon />
      </p>
      <div className="plus">
        <AddIcon />
      </div>
    </div>
  );
};

export default AddAccount;
