const express = require("express");
const app = express();
const port = process.env.PORT || 9000;
const morgan = require("morgan");
const setting = require("./config/setting");
const mongoose = require("mongoose");
const Api = require("./api/api");
const bodyParser = require("body-parser");

//database
mongoose
  .connect(setting.mongoURL)
  .then(() => {
    console.log(`Database connected at ${setting.mongoURL}`);
  })
  .catch(err => {
    console.log(err);
  });

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));


//routes
app.use("/api", Api);


// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//server
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
