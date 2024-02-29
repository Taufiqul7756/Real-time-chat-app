const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Middleware Functions
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;

app.listen(port, (req, res) => {
  console.log(`Server is running on port: ${port} ....`);
});

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));
