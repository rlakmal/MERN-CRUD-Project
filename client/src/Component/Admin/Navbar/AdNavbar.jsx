import React from "react";
import "./AdNavbar.css";
import { Link } from "react-router-dom";

const AdNavbar = ({ dataLen }) => {
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <h2>ADMIN PORTAL</h2>
          <ul>
            <li>
              <Link className="fas fa-home" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="fas fa-user" to="/librians">
                Librarians
              </Link>
            </li>
            <li>
              <Link className="fas fa-address-card" to="/shedule">
                Schedule
              </Link>
            </li>

            <li>
              <Link className="fas fa-address-book" to="/donors">
                Donors
              </Link>
            </li>
            <li>
              <Link className="fas fa-map-pin" to="/">
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <div className="main_content">
          <div className="header">Welcome!! Have a nice day.</div>
          <div className="info"></div>
        </div>
      </div>
    </>
  );
};
export default AdNavbar;
