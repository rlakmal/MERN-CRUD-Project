const express = require("express");
const LibLabModel = require("./LibLab");
const router = express.Router();

router.get("/librianskget", async (req, res) => {
  const data = await LibLabModel.find({});
  res.json({ succcess: true, data: data });
});

router.post("/librianscreate", async (req, res) => {
  console.log(req.body);
  const data = new LibLabModel(req.body);
  await data.save();
  res.send({ succcess: true, message: "data saved", data: data });
});
router.put("/update/:id", async (req, res) => {
  // Use a URL parameter to get the id
  console.log(req.body);
  const id = req.params.id; // Get the id from the URL parameter
  const { ...rest } = req.body; // Destructure the rest of the data
  console.log(rest);
  try {
    const data = await LibLabModel.findByIdAndUpdate(id, rest, { new: true }); // Use findByIdAndUpdate to update and get the updated document
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
router.delete("/libriansdelete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const data = await LibLabModel.deleteOne({ _id: id });
  res.send({ successs: true, message: "delete successfully", data: data });
});

module.exports = router;
