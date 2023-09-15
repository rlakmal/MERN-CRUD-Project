import React from "react";
import "./AddLibrians.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UpdateLibrians from "./UpdateLibrians";

const AddLibrians = ({ DeleteLibrians }) => {
  const [dataList, setDataList] = useState([]);
  const dataLen = dataList.length;
  const navi = useNavigate();

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

  const handleSubmit = async (x) => {
    x.preventDefault();
    const data = await axios.post("/labors/librianscreate", formData);
    console.log(data);
    if (data.data.succcess) {
      alert(data.data.message);
      navi("/librians");
      
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
    <div className="li-main">
      <div class="li-front">
        <form onSubmit={handleSubmit}>
          <h2>INPUT DATA</h2>
          <lable htmlFor="name">Name : </lable>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInput}
          ></input>
          <lable htmlFor="name">Position : </lable>
          <input
            type="text"
            id="position"
            name="position"
            onChange={handleInput}
          ></input>

          <lable htmlFor="member_id">Member ID : </lable>
          <input
            type="text"
            id="member_id"
            name="member_id"
            onChange={handleInput}
          ></input>

          <lable htmlFor="mobile_no">Mobile No : </lable>
          <input
            type="text"
            id="mobiile_no"
            name="mobile_no"
            onChange={handleInput}
          ></input>

          <button>Submit</button>
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
  );
};
export default AddLibrians;
