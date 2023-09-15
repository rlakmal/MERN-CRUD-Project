import React from "react";
import { MdClose } from "react-icons/md";
import "../Members/AddMembers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBooks = () => {
  const navig = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    author: "",
    isbn_no: "",
  });

  const handleSubmit = async (x) => {
    x.preventDefault();
    const data = await axios.post("/books/bookcreate", formData);
    console.log(data);
    if (data.data.succcess) {
      alert(data.data.message);
      navig("/ViewBooks");
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
      <div class="frontcontainer">
        <form onSubmit={handleSubmit}>
          <h2>INPUT BOOK DATA</h2>
          <lable htmlFor="name">Book Name : </lable>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
          ></input>

          <lable htmlFor="author">Author : </lable>
          <input
            type="text"
            id="author"
            name="author"
            onChange={handleInput}
          ></input>

          <lable htmlFor="isbn_no">ISBN NO : </lable>
          <input
            type="text"
            id="isbn_no"
            name="isbn_no"
            onChange={handleInput}
          ></input>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};
export default AddBooks;
