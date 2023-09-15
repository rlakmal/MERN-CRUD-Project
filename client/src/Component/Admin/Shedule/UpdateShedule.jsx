import React from "react";
import "./shedule.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

const UpdateShedule = () => {
  const [formDataInitialized, setFormDataInitialized] = useState(false);
  const [dataList, setDataList] = useState([]);
  const { id } = useParams();
  const history = useNavigate();

  const getFetchData = async () => {
    const data = await axios.get("/shedule/sheduleget");
    console.log(data);
    if (data.data.succcess) {
      setDataList(data.data.data);
      getFetchData();
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const [formData, setFormData] = useState({
    date: "",
    timeslot1: "",
    workername1: "",
    workingarea1: "",
    timeslot2: "",
    workername2: "",
    workingarea2: "",
    offtime: "",
  });
  useEffect(() => {
    if (!formDataInitialized) {
      const sheduleToUpdate = dataList.find((el) => el._id === id);
      if (sheduleToUpdate) {
        setFormData({
          date: sheduleToUpdate.date,
          timeslot1: sheduleToUpdate.timeslot1,
          workername1: sheduleToUpdate.workername1,
          workingarea1: sheduleToUpdate.workingarea1,
          timeslot2: sheduleToUpdate.timeslot2,
          workername2: sheduleToUpdate.workername2,
          workingarea2: sheduleToUpdate.workingarea2,
          offtime: sheduleToUpdate.offtime,
        });
        setFormDataInitialized(true);
      }
    }
  }, [dataList, id, formDataInitialized]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/shedule/update/${id}`, formData); // Pass the id as part of the URL
      if (response.data.success) {
        alert("shedule updated successfully!");
        history("/shedule");
      } else {
        alert("Failed to update member.");
      }
    } catch (error) {
      console.error("Error updating member: ", error);
    }
  };
  const handleInput = (x) => {
    const { value, name } = x.target;
    setFormData((preve) => {
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
            value={formData.date}
            onChange={handleInput}
          ></input>

          <lable htmlFor="timeslot1">TimeSlot-01 : </lable>
          <input
            type="text"
            id="timeslot1"
            name="timeslot1"
            value={formData.timeslot1}
            onChange={handleInput}
          ></input>

          <lable htmlFor="workername1">Worker-Name-01 : </lable>
          <input
            type="text"
            id="workername1"
            name="workername1"
            value={formData.workername1}
            onChange={handleInput}
          ></input>

          <lable htmlFor="workingarea1">Worker-Area-01 : </lable>
          <input
            type="text"
            id="workingarea1"
            name="workingarea1"
            value={formData.workingarea1}
            onChange={handleInput}
          ></input>
          <lable htmlFor="timeslot2">TimeSlot-02 : </lable>
          <input
            type="text"
            id="timeslot2"
            name="timeslot2"
            value={formData.timeslot2}
            onChange={handleInput}
          ></input>

          <lable htmlFor="workername2">Worker-Name-02 : </lable>
          <input
            type="text"
            id="workername2"
            name="workername2"
            value={formData.workername2}
            onChange={handleInput}
          ></input>

          <lable htmlFor="workingarea2">Worker-Area-02 : </lable>
          <input
            type="text"
            id="workingarea2"
            name="workingarea2"
            value={formData.workingarea2}
            onChange={handleInput}
          ></input>

          <lable htmlFor="offtime">OffTime : </lable>
          <input
            type="text"
            id="offtime"
            name="offtime"
            value={formData.offtime}
            onChange={handleInput}
          ></input>
          <div onClick={handleSubmit}>
            <Link to="/shedule">Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default UpdateShedule;
