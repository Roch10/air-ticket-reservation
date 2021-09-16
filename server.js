const express = require('express');
const app = express(),
  bodyParser = require("body-parser");
port = 3080;
const controllers = require("./controller");

const users = [];

app.use(bodyParser.json());

app.use("/api", controllers);

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});