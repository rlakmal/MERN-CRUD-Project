import React from "react";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditDonors = () => {
  const [formDataInitialized, setFormDataInitialized] = useState(false);
  const [dataList, setDataList] = useState([]);
  const { id } = useParams();
  const history = useNavigate();
  const [formData, setFormdata] = useState({
    name: "",
    contact: "",
    quantity: "",
  });
  const getFetchData = async () => {
    const data = await axios.get("/donor/donorsget");
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data);
      getFetchData();
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);

  useEffect(() => {
    if (!formDataInitialized) {
      const donorToUpdate = dataList.find((el) => el._id === id);
      if (donorToUpdate) {
        setFormdata({
          name: donorToUpdate.name,
          contact: donorToUpdate.contact,
          quantity: donorToUpdate.quantity,
        });
        setFormDataInitialized(true);
      }
    }
  }, [dataList, id, formDataInitialized]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/donor/update/${id}`, formData); // Pass the id as part of the URL
      if (response.data.success) {
        alert("updated successfully!");
        history("/donors");
      } else {
        alert("Failed to update donor.");
      }
    } catch (error) {
      console.error("Error updating donor: ", error);
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
          <h2>Update Donors Data</h2>
          <lable htmlFor="name">Name : </lable>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInput}
          ></input>

          <lable htmlFor="contact">Contact : </lable>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleInput}
          ></input>

          <lable htmlFor="quantity">Quantity : </lable>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleInput}
          ></input>
          <div onClick={handleSubmit}>
            <Link to="/donors">Submit</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditDonors;
