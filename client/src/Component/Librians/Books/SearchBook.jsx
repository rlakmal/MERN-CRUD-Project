import React, { useEffect, useState } from "react";
import axios from "axios";
import "./book.css";


const SearchBooks = ({ DeleteBooks }) => {
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

  const handleSearch = () => {
    const foundBook = dataList.find((book) => book.name === searchTerm);

    if (foundBook) {
      alert( `Book Found!!!\nName-${foundBook.name}\nAuthor-${foundBook.author}\nIsbn_no-${foundBook.isbn_no}`);
    } else {
      setSearchedBook(null);
      alert("Book not found");
    }
  };

  return (
    <div class="bookContainer">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Book Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="bk-btn-edit" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchBooks;
