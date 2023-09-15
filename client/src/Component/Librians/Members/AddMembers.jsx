import React from "react";
import "./AddMembers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const View = () => {
  const history = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    member_id: "",
    mobile_no: "",
  });

  const handleSubmit = async (x) => {
    x.preventDefault();
    const data = await axios.post("/members/create", formData);
    console.log(data);
    if (data.data.succ) {
      alert(data.data.message);
      history("/ViewMembers");
    }
  };
  const handleInput = (x) => {
    const { value, name } = x.target;
    setFormdata((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <div className="maincontainer1">
      <div class="frontcontainer">
        <form onSubmit={handleSubmit}>
          <h2>INPUT DATA</h2>
          <lable htmlFor="name">Name : </lable>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
          ></input>

          <lable htmlFor="member_id">Member ID : </lable>
          <input
            type="text"
            id="member_id"
            name="member_id"
            onChange={handleInput}
          ></input>

          <lable htmlFor="mobile_no">Book ID : </lable>
          <input
            type="text"
            id="mobiile_no"
            name="mobile_no"
            onChange={handleInput}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default View;
