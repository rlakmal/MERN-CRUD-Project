import React from "react";
import "./shedule.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ViewShedule = ({ DeleteShedule }) => {
  const [dataList, setDataList] = useState([]);
  const dataLen = dataList.length;

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
  return (
    <div className="sh-MainContainer">
      <h1>Today Working Shedule</h1>

      {dataList[0] ? (
        dataList.map((el) => {
          return (
            <>
              <div className="sh-block">
                <li>
                  <span>Date -</span> {el.date}
                </li>
                <div className="sh-div1">
                  <li>
                    <span>Time-Slot-01 - </span>
                    {el.timeslot1}
                  </li>

                  <li>
                    <span>Worker-Name-01 -</span> {el.workername1}
                  </li>
                  <li>
                    <span>Worker-Area-01 -</span> {el.workingarea1}
                  </li>
                </div>
                <div className="sh-div2">
                  <li>
                    <span>Time-Slot-02 -</span> {el.timeslot2}
                  </li>
                  <li>
                    <span>Worker-Name-02 -</span> {el.workername2}
                  </li>
                  <li>
                    <span>Worker-Area-02 -</span> {el.workingarea2}
                  </li>
                </div>
                <li>
                  <span>OffTime -</span> {el.offtime}
                </li>

                <div>
                  <button className="bk-btn-edit">
                    <Link to={`/updateshedule/${el._id}`}>Update</Link>
                  </button>
                  <button
                    onClick={() => {
                      DeleteShedule(el._id);
                    }}
                    className="bk-btn-delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div>
          <p style={{ textAlign: "center" }}>No Data Avilable</p>
          <div className="crsh">
            <Link className="create_she" to="/createshedule">
              Create Shedule
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default ViewShedule;
