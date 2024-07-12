const express = require("express");
const app = express();
// const jwt = require("jsonwebtoken");
require("dotenv").config()
const connectToDB = require("./config/mongoose-connection");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectToDB();

app.use("/api/auth", authRoutes);





app.listen(3000);


