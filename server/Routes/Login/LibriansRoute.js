const express = require("express");
const LibriansModel = require("./Librians")
const router = express.Router();

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    LibriansModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("The Password is Incorrect");
        }
      } else {
        res.json("No record existed");
      }
    });
  });
  
  app.post("/register", (req, res) => {
    LibriansModel.create(req.body)
      .then((librains) => res.json(librains))
      .catch((err) => res.json(err));
  });
  