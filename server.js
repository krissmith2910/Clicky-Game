//server.js
console.log("start")
const express = require('express');
console.log("express")
//const favicon = require('express-favicon');
const path = require('path');
console.log("express")
const port = process.env.PORT || 3000;
console.log("express")
const app = express();
console.log("express")
//app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
console.log("static1")
app.use(express.static(path.join(__dirname, 'build')));
console.log("static2")
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
console.log("route")
app.listen(port,function() {
  console.log("app listening")
});