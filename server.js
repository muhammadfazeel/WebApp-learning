const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const post = require("./routes/api/post");

const app = express();
//DB Config
const ddbb = require("./config/keys.js").mongoURI;
//Connect To MongoDB
mongoose
  .connect(
    ddbb,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

//Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/post", post);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server Running on port", port));
