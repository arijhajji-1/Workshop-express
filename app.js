const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require ("path");
const app = express();
app.set("views",path.join(__dirname,"views"));
app.set("view engine","twig");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mongoconnection = require("./config/mongoconnection.json");

const UserRouter = require("./routes/user");
app.use("/user", UserRouter);

const server = http.createServer(app);
const io = require ("socket.io")(server);
mongoose.connect(mongoconnection.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection eroor :"));
db.once("open", function () {
  console.log("base de données connectée avec succès!!");
});
io.on('connection', (socket)=> {
  console.log ('User Connected....');
  io.emit("msg","A new user is connected");
  socket.on("typing",(data)=>{
      socket.broadcast.emit("typing",data)

  })
  });
  
server.listen(3030, () => console.log("server is run in port 3000 "));