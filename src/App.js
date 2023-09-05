import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import EmailList from "./components/EmailList";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="app_body">
        <Sidebar />
        <EmailList />
      </div>
    </div>
  );
};

export default App;
