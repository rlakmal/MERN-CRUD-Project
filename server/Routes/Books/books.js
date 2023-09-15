const mongoose = require("mongoose");


const BookSchema = new mongoose.Schema(
  {
    name: String,
    author: String,
    isbn_no: String,
    photo: String,
  }
);
const BooksModel = mongoose.model("books", BookSchema);
module.exports = BooksModel;
