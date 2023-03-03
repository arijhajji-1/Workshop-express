const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoconnection = require("./config/mongoconnection.json");

const UserRouter = require("./routes/user");
app.use("/user", UserRouter);

const server = http.createServer(app);

mongoose.connect(mongoconnection.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection eroor :"));
db.once("open", function () {
  console.log("base de données connectée avec succès!!");
});

server.listen(3030, () => console.log("server is run in port 3000 "));