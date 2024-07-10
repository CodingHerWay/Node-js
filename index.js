//const http = require("http");
const express = require("express");

const app = express(); // app handler function he hai

app.get("/", (req, res) => {
  return res.send("Hello from home page");
});

app.get("/about", (req, res) => {
  return res.send("Hello from about page" + "hey" + req.query.name + "you are" + req.query.age);
});

app.listen(8000, () => {
  return res.send(`Hello ${req.query.name} `);
});
//const myServer = http.createServer(app);

//myServer.listen(8000, () =>{
  //console.log("server started")
//});