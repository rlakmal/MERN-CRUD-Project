import React from "react";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const AddDonors = () => {
  const navi = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    contact: "",
    quantity: "",
  });

  const handleSubmit = async (x) => {
    x.preventDefault();
    const data = await axios.post("/donor/donorscreate", formData);
    console.log(data);
    if (data.data.succcess) {
      alert(data.data.message);
      navi("/donors");
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
        <form onSubmit={handleSubmit}>
          <h2>Input Donors Data</h2>
          <lable htmlFor="name">Name : </lable>
          <input
            type="text"
            id="name"
            required
            name="name"
            onChange={handleInput}
          ></input>

          <lable htmlFor="contact">Contact : </lable>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            onChange={handleInput}
          ></input>

          <lable htmlFor="quantity">Quantity : </lable>
          <input
            type="text"
            id="quantity"
            name="quantity"
            required
            onChange={handleInput}
          ></input>
          <div>
            <input id="subBtn" type="submit" value="submit" />
            {/* <Link to="/donors">Submit</Link> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddDonors;
