import axios from "axios";

const DeleteLibrians = async (id) => {
  const data = await axios.delete("/labors/libriansdelete/" + id);
  console.log(data);
  if (data.data.successs) {
    alert(data.data.message);
  }
};
export default DeleteLibrians;
