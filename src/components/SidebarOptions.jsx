import React from "react";
import "./sidebarOptions.css";
const SidebarOptions = ({ Icon, title, number, isactive }) => {
  return (
    <div className={`sideBarOptions ${isactive && 'sidebaroptions--active'}`}>
      <Icon />
      <h4>{title}</h4>
      <p>{number}</p>
      
    </div>
  );
};

export default SidebarOptions;
