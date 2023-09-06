import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";
import { useSelector } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import EmailDetails from "./components/EmailDetails";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const isMessageOpen = useSelector(selectSendMessageIsOpen);
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<EmailList />} />
          <Route path="/mail" exact element={<EmailDetails />} />
        </Routes>
      </div>
      {isMessageOpen && <Compose />}
    </div>
  );
};

export default App;
