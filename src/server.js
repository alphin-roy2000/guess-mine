import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";
import socketController from "./socketController";
import events from "./events";
const PORT = 4000;
const app = express();

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(express.static(join(__dirname, "static")));
app.use(morgan("dev"));

app.get("/", (req, res) =>
  res.render("home", {
    events: JSON.stringify(events),
  })
);

const handleListening = () =>
  console.log(`😎 Server running: http://localhost:${PORT}`);
const server = app.listen(PORT, handleListening);

const io = socketIO(server);
let sockets = [];
io.on("connection", (socket) => socketController(socket));
// io.on("connection",socket=>{
//   // setInterval(()=>
//   socket.on("newMessage",({message})=>{
//     socket.broadcast.emit("messageNotif",{message,nickname:socket.nickname || "Anonymous"})
//   })
//   socket.on("setNickname",({nickname})=>{
//     socket.nickname=nickname;
//   })
//   // ,5000);
// });
// setInterval(()=> console.log(sockets),1000);
