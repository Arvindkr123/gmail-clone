import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";

const App = () => {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  console.log(isMessageOpen);
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
};

export default App;
