const express = require("express");
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var path = require ("path");
const { add } = require("./controller/chatController");
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
//socket tebaath l wahed bark 1-1
//io tebaath l nes lkol 
// socket +broadcast =  io
io.on('connection', (socket)=> {
  console.log("user connected")
  socket.emit('msg', 'user connected');
  socket.on("x",(data)=>{
    console.log(data)
    socket.broadcast.emit("x",data)
  });
  socket.on("msg",(data)=>{
    console.log(data)
    io.emit("msg",data)

  });

  socket.on('msg', (data)=> {
    console.log(data)
    add(data);
    io.emit("msg",data)
  })

  socket.on('disconnect', ()=> {
    console.log('disconnect')
    io.emit("msg","user deconnecter")
  })
  })
 
server.listen(3030, () => console.log("server is run in port 3030 "));