const express = require("express");
const app = express();
const connect = require("./db/connection");
const Schema = require("./db/Schema");
const cors = require("cors");
const User = require("./db/User");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

connect();

app.get("/api/", async (req, res) => {
  const celaBaza = (await Schema.find())[0];
  return res.status(200).json(celaBaza).end();
});

app.post("/api/signup/", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).end("Nema argumenata.");
  }
  const user = await User.findOne({
    email: req.body.email,
  });
  if (user) {
    return res.status(400).end();
  }
  const newUser = new User({
    email: req.body.email,
    password: req.body.password,
  });
  return res
    .status(200)
    .json(await newUser.save())
    .end();
});

app.post("/api/signin/", async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).end("Nema argumenata.");
  }
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user || user.password != req.body.password) {
    return res.status(400).end("Invalid credentials.");
  }
  return res.status(200).json(user).end();
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server slusa na portu ${process.env.PORT || 3000}...`);
});
