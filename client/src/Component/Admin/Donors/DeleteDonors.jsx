import axios from "axios";

const DeleteDonor = async (id) => {
  const data = await axios.delete("/donor/donordelete/" + id);
  console.log(data);
  if (data.data.successs) {
    alert(data.data.message);
  }
};
export default DeleteDonor;
