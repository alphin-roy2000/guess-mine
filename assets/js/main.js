// // console.log("hi");
// import {handleMessageNotif} from "./chat";
// const socket=io("/");
// // socket.on("hello",()=>console.log("Somebody  said hello"));
// function sendMessage(message){
//     socket.emit("newMessage",{message:message});
//     console.log(`You :${message}`);
// }
// function setNickname(nickname){
//     socket.emit("setNickname",{nickname});
// }


// socket.on("messageNotif",handleMessageNotif);
const body=document.querySelector("body");
const nickname = localStorage.getItem("nickname");
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";

if(nickname==null){
    body.className=LOGGED_OUT
}
else{

    body.className=LOGGED_IN; 
}