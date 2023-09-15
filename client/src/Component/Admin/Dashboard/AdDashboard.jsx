import React from "react";
import "./AdDashbord.css";
import { Link } from "react-router-dom";
import TableComponent from "../../Librians/Members/ViewMembers";

const AdDashboard = ({ dataLen, dataLenBook }) => {
  return (
    <>
      <div className="Admain">
        <h1 className="Adhead">
          WE ARE <span>GROWING........</span>
        </h1>
        <div className="AdcontainerTwo">
          <div className="Admemlist">
            <Link to={"/adminViewMembers"}>
              <h2>REGISTERED MEMBERS </h2>
              <h1>{dataLen}</h1>
            </Link>
          </div>

          <div className="Admemlist2">
            <Link to={"/adminViewBooks"}>
              <h2>REGISTERED BOOKS </h2>
              <h1>{dataLenBook}</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdDashboard;
