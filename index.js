const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const friends = require("./routes/friends");
const authenticate = require("./routes/authenticate");
const appConstants = require("./constants/app.constants");

require('dotenv').config();

//Setup Express
const app = express();

// DB
mongoose
  .connect(process.env.DB_URL_LOCAL || appConstants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(console.log("DB connected successfully!!"));

// Middleware
app.use(bodyParser.json());

//Routes
app.use("/friends", friends);
app.use("/authenticate", authenticate);

//Running Server
app.listen(process.env.PORT || appConstants.PORT, () => {
  console.log(`Running at port ${process.env.PORT || appConstants.PORT}`);
});
