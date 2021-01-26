import React from "react";
import './App.css';
import Sidebar from "./Sidebar";
import Feed from "./Feed.js";
import Widgets from "./Widgets.js";

function App() {
  return (
    //BEM
    <div className="app">
      
      {/*Sidebar*/}
      <Sidebar />

      {/*Feed*/}
      <Feed />

      {/*Widget*/}
      <Widgets />

    </div>
  );
}

export default App;
