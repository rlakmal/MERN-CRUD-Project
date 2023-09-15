import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateBooks = ({dataListBook}) => {

  const [formDataInitialized, setFormDataInitialized] = useState(false);
  const { id } = useParams();
  const history = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    author: "",
    isbn_no: "",
  });

  
  useEffect(() => {
    if (!formDataInitialized) {
      const booksToUpdate = dataListBook.find((el) => el._id === id);
      if (booksToUpdate) {
        setFormData({
          name: booksToUpdate.name,
          author: booksToUpdate.author,
          isbn_no: booksToUpdate.isbn_no,
        });
        setFormDataInitialized(true);
      }
    }
  }, [dataListBook, id, formDataInitialized]);

  const handleInput = (x) => {
    const { value, name } = x.target;
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/books/update/${id}`, formData); // Pass the id as part of the URL
      if (response.data.success) {
        alert("Member updated successfully!");
        history("/ViewBooks");
      } else {
        alert("Failed to update member.");
      }
    } catch (error) {
      console.error("Error updating member: ", error);
    }
  };

  return (
    <div className="">
      <div class="frontcontainer">
        <form onSubmit={handleUpdate}>
          <h2>UPDATE BOOK DATA</h2>
          <lable htmlFor="name">Book Name : </lable>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInput}
          ></input>

          <lable htmlFor="author">Author : </lable>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleInput}
          ></input>

          <lable htmlFor="isbn_no">ISBN NO : </lable>
          <input
            type="text"
            name="isbn_no"
            value={formData.isbn_no}
            onChange={handleInput}
          ></input>

          <button>Update</button>
        </form>
      </div>
     
    </div>
  );
};
export default UpdateBooks;
