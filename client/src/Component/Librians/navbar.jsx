import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [addSection, setAddSection] = useState(false);
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="nav">
      <label className="logo">
        FREE<span className="highlight">LibX </span>
      </label>

      <ul className="mylist">
        <li>
          <Link className="bttn" to="/DashBoard">
            HOME
          </Link>
        </li>

        <li>
          <Link className="bttn">MEMBERS</Link>
          <ul className="dropdown">
            <li>
              <Link className="bttn" to="/AddMembers">
                ADD MEMBER
              </Link>
            </li>
            <li>
              <Link className="bttn" to="/ViewMembers">
                Member List
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <Link className="bttn">BOOKS</Link>
          <ul className="dropdown">
            <li>
              <Link className="bttn" to="/Addbooks">
                Add Book
              </Link>
            </li>
            <li>
              <Link className="bttn" to="/ViewBooks">
                Book List
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link className="bttn" to="/workshedule">
            Shedule
          </Link>
        </li>

        <li>
          <Link className="bttn" to="">
            LOG OUT
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
