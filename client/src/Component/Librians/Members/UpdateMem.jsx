import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateMember = ({ dataList }) => {
  const { id } = useParams();
  const history = useNavigate();
  const [formDataInitialized, setFormDataInitialized] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    member_id: "",
    mobile_no: "",
  });

  useEffect(() => {
    if (!formDataInitialized) {
      const memberToUpdate = dataList.find((el) => el._id === id);
      if (memberToUpdate) {
        setFormData({
          name: memberToUpdate.name,
          member_id: memberToUpdate.member_id,
          mobile_no: memberToUpdate.mobile_no,
        });
        setFormDataInitialized(true);
      }
    }
  }, [dataList, id, formDataInitialized]);

  const handleInput = (x) => {
    const { value, name } = x.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {}; //only update using given data, other are hear
      for (const key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] !== "") {
          updatedData[key] = formData[key];
        }
      }
      const response = await axios.put(`/members/update/${id}`, updatedData); // Pass the id as part of the URL
      if (response.data.success) {
        alert("Member updated successfully!");
        history("/ViewMembers");
      } else {
        alert("Failed to update member.");
      }
    } catch (error) {
      console.error("Error updating member: ", error);
    }
  };

  return (
    <div className="">
      <div className="frontcontainer">
        <form onSubmit={handleUpdate}>
          <h2>UPDATE MEMBER</h2>
          <label>Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleInput}

          />
          <label>Member ID:</label>
          <input
            name="member_id"
            value={formData.member_id}
            onChange={handleInput}
  
          />
          <label>Mobile Number:</label>
          <input
            name="mobile_no"
            value={formData.mobile_no}
            onChange={handleInput}
           
          />
          <button type="submit">Update</button> {/* Added type="submit" */}
        </form>
      </div>
    </div>
  );
};

export default UpdateMember;
