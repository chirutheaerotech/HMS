import React from "react";
import Dropdown from "./Components/Dropdown";
import logo from "./logo.png";
import account from "./account.png";


function App() {
  return (
    <div>
      <div className="header">
        <img className="logo ms-5" src={logo} />
        <img className="account" src={account} />
      </div>
      <div className="hero">
        <h3 className="">Admin Portal</h3>
        <Dropdown />
      </div>
    </div>
  );
}

export default App;
