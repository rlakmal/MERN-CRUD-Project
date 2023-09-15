import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Donors.css";
import { Link } from "react-router-dom";
import DeleteDonor from "./DeleteDonors";

const ViewDonors = ({ DeleteDonor }) => {
  const [dataList, setDataList] = useState([]);
  const dataLen = dataList.length;

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
  return (
    <>
      <div>
        <h1 className="head">LIST OF REGISTERED DONORS</h1>
        <Link className="create_btn" to="/addDonors">
          Add donors
        </Link>
        <div className="doli-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  return (
                    <tr>
                      <td>{el.name}</td>
                      <td>{el.contact}</td>
                      <td>{el.quantity}</td>
                      <td>
                        <button className="doli-btn-edit">
                          <Link to={`/updatedonor/${el._id}`}>Edit</Link>
                        </button>
                        <button
                          onClick={() => {
                            DeleteDonor(el._id);
                          }}
                          className="doli-btn-delete"
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
    </>
  );
};
export default ViewDonors;
