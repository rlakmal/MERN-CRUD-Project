import axios from "axios";

const DeleteMembers = async (id) => {
  const data = await axios.delete("/members/delete/" + id);
  console.log(data);
  if (data.data.successs) {
    alert(data.data.message);
  }
};
export default DeleteMembers;
