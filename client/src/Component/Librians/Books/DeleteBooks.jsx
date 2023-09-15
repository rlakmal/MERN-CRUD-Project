import axios from "axios";

const DeleteBooks = async (id) => {
  const data = await axios.delete("/books/booksdelete/" + id);
  if (data.data.success) {
    alert(data.data.message);
  }
};
export default DeleteBooks;
