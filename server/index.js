  const express = require("express");
  const cors = require("cors");
  const cookieParser = require('cookie-parser');
 
  
  // Create an express app
  const app = express();
  
  // Configure express app
  app.use(express.json());
  app.use(cookieParser());
  app.use(cors({
    origin:true,
    credentials:true,
  }));
  
 