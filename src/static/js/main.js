(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleMessageNotif = handleMessageNotif;

function handleMessageNotif(data) {
  var message = data.message,
      nickname = data.nickname;
  console.log("".concat(nickname, " send a message ->").concat(message));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsiaGFuZGxlTWVzc2FnZU5vdGlmIiwiZGF0YSIsIm1lc3NhZ2UiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxrQkFBVCxDQUE0QkMsSUFBNUIsRUFBaUM7QUFBQSxNQUM3QkMsT0FENkIsR0FDWEQsSUFEVyxDQUM3QkMsT0FENkI7QUFBQSxNQUNyQkMsUUFEcUIsR0FDWEYsSUFEVyxDQUNyQkUsUUFEcUI7QUFFcENDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixXQUFlRixRQUFmLCtCQUE0Q0QsT0FBNUM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlTm90aWYoZGF0YSl7XHJcbiAgICBjb25zdCB7bWVzc2FnZSxuaWNrbmFtZX09ZGF0YTtcclxuICAgIGNvbnNvbGUubG9nKGAke25pY2tuYW1lfSBzZW5kIGEgbWVzc2FnZSAtPiR7bWVzc2FnZX1gKTtcclxufSJdfQ==
},{}],2:[function(require,module,exports){
"use strict";

var _chat = require("./chat");

// console.log("hi");
var socket = io("/"); // socket.on("hello",()=>console.log("Somebody  said hello"));

function sendMessage(message) {
  socket.emit("newMessage", {
    message: message
  });
  console.log("You :".concat(message));
}

function setNickname(nickname) {
  socket.emit("setNickname", {
    nickname: nickname
  });
}

socket.on("messageNotif", _chat.handleMessageNotif);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODM1YTNkYjUuanMiXSwibmFtZXMiOlsic29ja2V0IiwiaW8iLCJzZW5kTWVzc2FnZSIsIm1lc3NhZ2UiLCJlbWl0IiwiY29uc29sZSIsImxvZyIsInNldE5pY2tuYW1lIiwibmlja25hbWUiLCJvbiIsImhhbmRsZU1lc3NhZ2VOb3RpZiJdLCJtYXBwaW5ncyI6Ijs7QUFDQTs7QUFEQTtBQUVBLElBQU1BLE1BQU0sR0FBQ0MsRUFBRSxDQUFDLEdBQUQsQ0FBZixDLENBQ0E7O0FBQ0EsU0FBU0MsV0FBVCxDQUFxQkMsT0FBckIsRUFBNkI7QUFDekJILEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLFlBQVosRUFBeUI7QUFBQ0QsSUFBQUEsT0FBTyxFQUFDQTtBQUFULEdBQXpCO0FBQ0FFLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixnQkFBb0JILE9BQXBCO0FBQ0g7O0FBQ0QsU0FBU0ksV0FBVCxDQUFxQkMsUUFBckIsRUFBOEI7QUFDMUJSLEVBQUFBLE1BQU0sQ0FBQ0ksSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ0ksSUFBQUEsUUFBUSxFQUFSQTtBQUFELEdBQTFCO0FBQ0g7O0FBR0RSLE1BQU0sQ0FBQ1MsRUFBUCxDQUFVLGNBQVYsRUFBeUJDLHdCQUF6QiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbmltcG9ydCB7aGFuZGxlTWVzc2FnZU5vdGlmfSBmcm9tIFwiLi9jaGF0XCI7XHJcbmNvbnN0IHNvY2tldD1pbyhcIi9cIik7XHJcbi8vIHNvY2tldC5vbihcImhlbGxvXCIsKCk9PmNvbnNvbGUubG9nKFwiU29tZWJvZHkgIHNhaWQgaGVsbG9cIikpO1xyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtZXNzYWdlKXtcclxuICAgIHNvY2tldC5lbWl0KFwibmV3TWVzc2FnZVwiLHttZXNzYWdlOm1lc3NhZ2V9KTtcclxuICAgIGNvbnNvbGUubG9nKGBZb3UgOiR7bWVzc2FnZX1gKTtcclxufVxyXG5mdW5jdGlvbiBzZXROaWNrbmFtZShuaWNrbmFtZSl7XHJcbiAgICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIse25pY2tuYW1lfSk7XHJcbn1cclxuXHJcblxyXG5zb2NrZXQub24oXCJtZXNzYWdlTm90aWZcIixoYW5kbGVNZXNzYWdlTm90aWYpOyJdfQ==
},{"./chat":1}]},{},[2])