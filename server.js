require("dotenv").config();
// Express initialization
const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3001;

// Passport configuration
require("./services/passport");

// Mongoose Connection
const db = require("./config/connection");
db(process.env.MONGODB_URI || "mongodb://localhost/login");

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("morgan")("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("app/build"));
}

app.use(require("./route"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/app/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});


