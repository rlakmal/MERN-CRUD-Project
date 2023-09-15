const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyPraser = require("body-parser");
require("dotenv").config();
const LibriansModel = require("./Routes/Login/Librians.js");
const bcrypt = require("bcryptjs");
const {
  generateToken,
  verifyToken,
  authenticateToken,
} = require("./middleware/jwt.js");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(bodyPraser.json());
const PORT = process.env.PORT || 8080;

const members = require("./Routes/Member/memberRoute.js");
app.use("/members", members);

const books = require("./Routes/Books/bookroute.js");
app.use("/books", books);
const labors = require("./Routes/LibraryLabors/LaborsRoute.js");
app.use("/labors", labors);
const shedule = require("./Routes/Shedule/sheduleRoute.js");
app.use("/shedule", shedule);
const donor = require("./Routes/Donors/donorroute.js");
app.use("/donor", donor);

mongoose
  .connect(process.env.MONGODB_URL, {
    // useSS
  })
  .then(() => {
    console.log("connect to db");
    app.listen(PORT, () => console.log("Server is running"));
  })
  .catch((err) => console.log(err));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json("No record existed");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      res.json("Success");
    } else {
      res.json("The Password is Incorrect");
    }
  } catch (error) {
    res.json("Error occurred");
  }
});

const User = mongoose.model("Librians", LibriansModel.schema);
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    const newUser = new User({
      email,
      password: encryptedPassword,
    });

    await newUser.save();
    res.json({ status: "ok" }); // Send a response on successful registration
  } catch (error) {
    res.json({ status: "error" });
  }
});
