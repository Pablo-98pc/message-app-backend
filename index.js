require("dotenv").config();
var cors = require("cors");
const http = require("http");
var md5 = require("md5");
var app = require("express")();
const socketio = require("socket.io");
const { setValue} = require('./helpers/redis')
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use(cors());
/* app.use(require('./middlewares/checkBody')); */
app.use(process.env.ROOT, require("./routes"));
const server = http.createServer(app);
//Setup Socket 
//More info //https://stackoverflow.com/questions/36904048/socket-io-express-framework-emit-fire-from-express-controller-router
const io = socketio(server);
global.io = io;
io.on('connection', socket => {
        socket.on("connected", (a) => {
           //On connection we pair socket.id with userId
            console.log("usuario conectado", a,socket.id);
            setValue(a.toString(),socket.id)
        })
    }

)
server.listen(3001, () => {
  console.log("Working!!!");
});
