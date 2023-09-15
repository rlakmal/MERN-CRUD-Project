const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");
let BooksModel = require("./Books/books");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowdFileTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowdFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/add").post(upload.single("photo"), (req, res) => {
  const name = req.body.name;
  const author = req.body.author;
  const isbn_no = req.body.isbn_no;
  const photo = req.body.photo;

  const newUserData = {
    name,
    author,
    isbn_no,
    photo,
  };

  const newUser = new User(newUserData);
  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("error: " + err));
});

router.route("/rec").get((req, res) => {
  User.find()
    .then(() => res.json(user))
    .catch((err) => res.status(400).json("error: " + err));
});
