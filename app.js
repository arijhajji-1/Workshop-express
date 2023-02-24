const express = require('express');
const http = require('http')
const mongo = require('mongoose'); 
const mongoconnection = require('./config/mongoconnection.json'); 
const bodyParser = require("body-parser")



mongo.connect(mongoconnection.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("DataBase Connected");
    })
    .catch((err) => {
        console.log(err);
    });

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var useRouter = require('./routes/user'); 
app.use('/user', useRouter); 


 


const server = http.createServer(app); 
server.listen(3030, () => console.log('server'))