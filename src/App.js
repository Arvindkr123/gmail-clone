import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";
import Compose from "./components/Compose";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
      </div>
      <Compose />
    </div>
  );
};

export default App;
