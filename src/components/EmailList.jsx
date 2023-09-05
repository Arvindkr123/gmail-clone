import React from "react";
import "./emailList.css";
import EmailListSetting from "./EmailListSetting";
import EmailType from "./EmailType";
import EmailBody from "./EmailBody";

const EmailList = () => {
  return (
    <div className="emailList">
      <EmailListSetting />
      <EmailType />

      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
      <EmailBody
        name="Elon Musk"
        subject="This is important message"
        message="Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae Lorem ipsum dolor sit amet consectetur adipisicing elit. At voluptatibus quae "
        time="2:30 PM"
      />
    </div>
  );
};

export default EmailList;
