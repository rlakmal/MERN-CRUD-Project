import React from "react";
import { MdClose } from "react-icons/md";
import "./shedule.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const AddShedule = () => {
  const [formData, setFormdata] = useState({
    date: "",
    timeslot1: "",
    workername1: "",
    workingarea1: "",
    timeslot2: "",
    workername2: "",
    workingarea2: "",
    offtime: "",
  });

  const handleSubmit = async (x) => {
    x.preventDefault();
    const data = await axios.post("/shedule/shedulecreate", formData);
    console.log(data);
    if (data.data.success) {
      alert(data.data.message);
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
    <div className="">
      <div class="sh-container">
        <form>
          <h2>Input Shedule Data</h2>
          <lable htmlFor="date">Date : </lable>
          <input
            type="date"
            id="date"
            name="date"
            onChange={handleInput}
          ></input>

          <lable htmlFor="timeslot1">TimeSlot-01 : </lable>
          <input
            type="text"
            id="timeslot1"
            name="timeslot1"
            onChange={handleInput}
          ></input>

          <lable htmlFor="workername1">Worker-Name-01 : </lable>
          <input
            type="text"
            id="workername1"
            name="workername1"
            onChange={handleInput}
          ></input>

          <lable htmlFor="workingarea1">Worker-Area-01 : </lable>
          <input
            type="text"
            id="workingarea1"
            name="workingarea1"
            onChange={handleInput}
          ></input>
          <lable htmlFor="timeslot2">TimeSlot-02 : </lable>
          <input
            type="text"
            id="timeslot2"
            name="timeslot2"
            onChange={handleInput}
          ></input>

          <lable htmlFor="workername2">Worker-Name-02 : </lable>
          <input
            type="text"
            id="workername2"
            name="workername2"
            onChange={handleInput}
          ></input>

          <lable htmlFor="workingarea2">Worker-Area-02 : </lable>
          <input
            type="text"
            id="workingarea2"
            name="workingarea2"
            onChange={handleInput}
          ></input>

          <lable htmlFor="offtime">OffTime : </lable>
          <input
            type="text"
            id="offtime"
            name="offtime"
            onChange={handleInput}
          ></input>
          <div onClick={handleSubmit}>
          <Link  to="/shedule">
            Submit
          </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddShedule;
