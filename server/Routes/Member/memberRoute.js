const express = require("express");
const router = express.Router();
const userModel = require("./member");

router.get("/", async (req, res) => {
  const data = await userModel.find({});
  res.json({ succcess: true, data: data });
});
router.post("/create", async (req, res) => {
  console.log(req.body);
  const data = new userModel(req.body);
  await data.save();
  res.send({ succ: true, message: "Data save successfully", data: data });
});
router.put("/update/:id", async (req, res) => {
  // Use a URL parameter to get the id
  console.log(req.body);
  const id = req.params.id; // Get the id from the URL parameter
  const { ...rest } = req.body; // Destructure the rest of the data
  console.log(rest);
  try {
    const data = await userModel.findByIdAndUpdate(id, rest, { new: true }); // Use findByIdAndUpdate to update and get the updated document
    if (data) {
      res.send({ success: true, message: "Update successfully", data: data });
    } else {
      res.status(404).send({ success: false, message: "Book not found" });
    }
  } catch (error) {
    console.error("Error updating member: ", error);
    res.status(500).send({ success: false, message: "Internal server error" });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await userModel.deleteOne({ _id: id });
  res.send({ successs: true, message: "delete successfully", data: data });
});

module.exports = router;
