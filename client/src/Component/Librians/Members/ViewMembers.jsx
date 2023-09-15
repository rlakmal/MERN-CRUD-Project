import React from "react";
import { Link } from "react-router-dom";

const TableComponent = ({ dataList, DeleteMembers }) => {
  return (
    <div>
      <div className="tableContainer">
        <h1>LIST OF REGISTERED MEMEBERS</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
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
                    <td>{el.member_id}</td>
                    <td>{el.mobile_no}</td>
                    <td>
                      <button className="btn-edit">
                        <Link to={`/UpdateMember/${el._id}`}>Update</Link>
                      </button>
                      <button
                        className="btn-delete"
                        onClick={() => DeleteMembers(el._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div style={{ textAlign: "center" }}>No Data Avilable</div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableComponent;
