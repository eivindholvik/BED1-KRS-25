const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const path = require("path");
const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();

const admin = io.of("/admin");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/room1", (req, res) => {
  res.render(__dirname + "/views" + '/room.ejs', { room: "room1" });
});

app.get("/room2", (req, res) => {
  res.render(__dirname + "/views" + '/room.ejs', { room: "room2" });
});

app.post("/newroom", jsonParser, (req, res) => {
  const room = req.body.room;
  app.get("/" + room, (req, res) => {
    res.render(__dirname + "/views" + '/room.ejs', { room: room });
  });
  res.send({
    "room": room
  })
})


// app.get("/room/:roomId", (req, res) => {
//   res.render(__dirname + "/views" + '/room.ejs', { room: req.params.roomId });
// })



admin.on('connection', (socket) => {
  socket.on("join", (data) => {
    socket.join(data.room);
    admin.in(data.room).emit("chat message", `New user joined ${data.room} room!`);
    console.log("admin connected");
  });

  socket.on("chat message", (data) => {
    console.log("message: " + data.msg);
    admin.in(data.room).emit("chat message", data.msg);
  })

  // socket.on('chat message', (msg) => {
  //   admin.emit('chat message', msg);
  // });

  socket.on("disconnect", () => {
    console.log("admin disconnected");
    admin.emit("chat message", "user disconnected");
  })
});


// //This is the old one
// io.on('connection', (socket) => {
//   socket.emit('server message', { server: 'any messages for me?' });

//   socket.on("chat message", (msg) => {
//     io.emit("chat message", msg);
//   });

//   console.log('a user connected');
// });

server.listen(3000, () => {
  console.log('listening on *:3000');
});