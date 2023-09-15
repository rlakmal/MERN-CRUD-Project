import React, { useEffect, useState } from "react";
import axios from "axios";
import "./book.css";
import { Link } from "react-router-dom";
import SearchBooks from "./SearchBook";

const ViewBooks = ({ DeleteBooks }) => {
  const [dataList, setDataList] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to store the search term
  const [searchedBook, setSearchedBook] = useState(null); // State to store the searched book

  const getFetchData = async () => {
    const data = await axios.get("/books/bookget");
    console.log(data);
    if (data.data.succcess) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  return (
    <div class="bookContainer">
      <div className="search-container">
        <SearchBooks />
      </div>
      <h1>LIST OF REGISTERED BOOKS</h1>
      {dataList[0] ? (
        dataList.map((el) => {
          return (
            <div className="block" key={el._id}>
              <li>
                <span>Book name -</span>{" "}
                <div className="element">{el.name}</div>
              </li>
              <li>
                <span>Author - </span>
                <div className="element">{el.author}</div>
              </li>
              <li>
                <span>ISBN-No -</span>{" "}
                <div className="element">{el.isbn_no}</div>
              </li>

              <div>
                <button className="bk-btn-edit">
                  <Link to={`/UpdateBooks/${el._id}`}>Update</Link>
                </button>
                <button
                  onClick={() => DeleteBooks(el._id)}
                  className="bk-btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: "center" }}>No Data Available</p>
      )}
    </div>
  );
};

export default ViewBooks;
