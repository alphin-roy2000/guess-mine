(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
var body = document.querySelector("body");
var nickname = localStorage.getItem("nickname");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";

if (nickname == null) {
  body.className = LOGGED_OUT;
} else {
  body, className = LOGGED_IN;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmYzNDM4NzcuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJjbGFzc05hbWUiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsSUFBTUEsSUFBSSxHQUFDQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQWpCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHLFdBQW5CO0FBQ0EsSUFBTUMsU0FBUyxHQUFHLFVBQWxCOztBQUVBLElBQUdKLFFBQVEsSUFBRSxJQUFiLEVBQWtCO0FBQ2RILEVBQUFBLElBQUksQ0FBQ1EsU0FBTCxHQUFlRixVQUFmO0FBQ0gsQ0FGRCxNQUdJO0FBRUFOLEVBQUFBLElBQUksRUFBQ1EsU0FBUyxHQUFDRCxTQUFmO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvLyBjb25zb2xlLmxvZyhcImhpXCIpO1xyXG4vLyBpbXBvcnQge2hhbmRsZU1lc3NhZ2VOb3RpZn0gZnJvbSBcIi4vY2hhdFwiO1xyXG4vLyBjb25zdCBzb2NrZXQ9aW8oXCIvXCIpO1xyXG4vLyAvLyBzb2NrZXQub24oXCJoZWxsb1wiLCgpPT5jb25zb2xlLmxvZyhcIlNvbWVib2R5ICBzYWlkIGhlbGxvXCIpKTtcclxuLy8gZnVuY3Rpb24gc2VuZE1lc3NhZ2UobWVzc2FnZSl7XHJcbi8vICAgICBzb2NrZXQuZW1pdChcIm5ld01lc3NhZ2VcIix7bWVzc2FnZTptZXNzYWdlfSk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhgWW91IDoke21lc3NhZ2V9YCk7XHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gc2V0Tmlja25hbWUobmlja25hbWUpe1xyXG4vLyAgICAgc29ja2V0LmVtaXQoXCJzZXROaWNrbmFtZVwiLHtuaWNrbmFtZX0pO1xyXG4vLyB9XHJcblxyXG5cclxuLy8gc29ja2V0Lm9uKFwibWVzc2FnZU5vdGlmXCIsaGFuZGxlTWVzc2FnZU5vdGlmKTtcclxuY29uc3QgYm9keT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5pY2tuYW1lXCIpO1xyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5cclxuaWYobmlja25hbWU9PW51bGwpe1xyXG4gICAgYm9keS5jbGFzc05hbWU9TE9HR0VEX09VVFxyXG59XHJcbmVsc2V7XHJcblxyXG4gICAgYm9keSxjbGFzc05hbWU9TE9HR0VEX0lOOyBcclxufSJdfQ==
},{}]},{},[1])