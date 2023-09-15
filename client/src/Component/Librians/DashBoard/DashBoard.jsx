import React from "react";
import "./Dashboard.css";
import SearchBooks from "../Books/SearchBook";

const Dashboard = ({ dataLen, dataLenBook }) => {
  return (
    <>
      <div className="maincontainer">
        <SearchBooks/>
        <div className="childcontainer">
          <h1>
            WELCOME TO FREE<span>LIBX</span>
          </h1>
        </div>
        <h1 className="sector">
          WE ARE <span>GROWING........</span>
        </h1>
        <div className="containerTwo">
          <div className="memlist">
            <h2>REGISTERED MEMBERS </h2>
            <h1>{dataLen}</h1>
          </div>

          <div className="memlist2">
            <h2>REGISTERED BOOKS </h2>
            <h1>{dataLenBook}</h1>
          </div>
          
        </div>
      </div>
  
    </>
  );
};
export default Dashboard;
