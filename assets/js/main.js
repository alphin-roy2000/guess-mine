// console.log("hi");
import {handleMessageNotif} from "./chat";
const socket=io("/");
// socket.on("hello",()=>console.log("Somebody  said hello"));
function sendMessage(message){
    socket.emit("newMessage",{message:message});
    console.log(`You :${message}`);
}
function setNickname(nickname){
    socket.emit("setNickname",{nickname});
}


socket.on("messageNotif",handleMessageNotif);