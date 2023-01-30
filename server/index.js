const express=require('express');
const cors= require('cors');
const Db=require('./connection/Db');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const multer = require("multer");
const path = require("path");


const app=express();
 app.use(express.json());
 app.use(cors());
 Db();

 const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  const upload = multer({ storage: storage });
  app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });
  app.use("/auth", authRoute);
  app.use("/users", userRoute);
  app.use("/posts", postRoute);
  app.use("/categories", categoryRoute);
  
 app.listen("5000",()=>{
  console.log("connected");
 });

  
 
 