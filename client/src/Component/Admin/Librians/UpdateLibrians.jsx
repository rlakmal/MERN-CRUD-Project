import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import AdNavbar from "../Navbar/AdNavbar";

const UpdateLibrians = ({ DeleteLibrians }) => {
  const [dataList, setDataList] = useState([]);
  const [formDataInitialized, setFormDataInitialized] = useState(false);
  const { id } = useParams();
  const history = useNavigate();

  const getFetchData = async () => {
    const data = await axios.get("/labors/librianskget");
    console.log(data);
    if (data.data.succcess) {
      setDataList(data.data.data);
      getFetchData();
    }
  };
  useEffect(() => {
    getFetchData();
  }, []);
  const [formData, setFormdata] = useState({
    name: "",
    position: "",
    member_id: "",
    mobile_no: "",
  });
  useEffect(() => {
    if (!formDataInitialized) {
      const librianToUpdate = dataList.find((el) => el._id === id);
      if (librianToUpdate) {
        setFormdata({
          name: librianToUpdate.name,
          position: librianToUpdate.position,
          member_id: librianToUpdate.member_id,
          mobile_no: librianToUpdate.mobile_no,
        });
        setFormDataInitialized(true);
      }
    }
  }, [dataList, id, formDataInitialized]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/labors/update/${id}`, formData); // Pass the id as part of the URL
      if (response.data.success) {
        alert("Member updated successfully!");
        history("/librians");
      } else {
        alert("Failed to update member.");
      }
    } catch (error) {
      console.error("Error updating member: ", error);
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
    <>
      <AdNavbar />
      <div className="li-main">
        <div class="li-front">
          <form onSubmit={handleSubmit}>
            <h2>UPDATE DATA</h2>
            <lable htmlFor="name">Name : </lable>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInput}
            ></input>
            <lable htmlFor="name">Position : </lable>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInput}
            ></input>

            <lable htmlFor="member_id">Member ID : </lable>
            <input
              type="text"
              id="member_id"
              name="member_id"
              value={formData.member_id}
              onChange={handleInput}
            ></input>

            <lable htmlFor="mobile_no">Mobile No : </lable>
            <input
              type="text"
              id="mobiile_no"
              name="mobile_no"
              value={formData.mobile_no}
              onChange={handleInput}
            ></input>

            <button>Update</button>
          </form>
        </div>
        <diV className="vl"></diV>
        <div>
          <div class="li-table">
            <h1>LIST OF REGISTERED LIBRIANS</h1>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Member ID</th>
                  <th>Mobile_NO</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dataList[0] ? (
                  dataList.map((el) => {
                    return (
                      <tr>
                        <td>{el.name}</td>
                        <td>{el.position}</td>
                        <td>{el.member_id}</td>
                        <td>{el.mobile_no}</td>
                        <td>
                          <button className="li-btn-edit">
                            <Link to={`/Updatelibrian/${el._id}`}>Update</Link>
                          </button>
                          <button
                            className="li-btn-delete"
                            onClick={() => DeleteLibrians(el._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                ) : (
                  <p style={{ textAlign: "center" }}>No Data Avilable</p>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default UpdateLibrians;
