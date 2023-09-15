import axios from "axios";

const DeleteShedule = async (id) => {
  const data = await axios.delete("/shedule/sheduledelete/" + id);
  console.log(data);
  if (data.data.success) {
    console.log(data.data.message);
  }
};

export default DeleteShedule;
