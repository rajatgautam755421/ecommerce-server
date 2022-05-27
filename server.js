const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();
require("./Config/connection");
require("dotenv").config();

const Port = 4000;
//GLobal Middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json());

//Home Page
app.get("/api/v1", (req, res) => {
  res.status(200).json({
    status: "success",
    msg: "Welcome",
  });
});

// Importing Routes
const studentRoute = require("./Routes/students");

//Implementing Routes
app.use("/api/v1", studentRoute);

app.listen(Port || process.env.PORT, () => {
  console.log("Server Is Up And Running In 4000");
});
