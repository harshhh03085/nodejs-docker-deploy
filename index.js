const express = require("express");
const dotenv = require("dotenv");
const basicAuth = require("express-basic-auth");

dotenv.config();

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(
  "/secret",
  basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
    challenge: true,
  })
);

app.get("/secret", (req, res) => {
  res.send(`Secret message: ${process.env.SECRET_MESSAGE}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
