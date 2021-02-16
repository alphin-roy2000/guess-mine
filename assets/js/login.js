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

import { initSockets } from "./sockets";

// socket.on("messageNotif",handleMessageNotif);
const body = document.querySelector("body");
const NICKNAME = "nickname";
const LOGGED_OUT = "loggedOut";
const LOGGED_IN = "loggedIn";
const loginForm = document.getElementById("jsLogin");
const nickname = localStorage.getItem(NICKNAME);
const logIn = (nickname) => {
  const socket = io("/");
  socket.emit(window.events.setNickname, { nickname });

  initSockets(socket);
};
if (nickname == null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

const handleFormSubmit = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const { value } = input;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;

  logIn(value);
};
if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
