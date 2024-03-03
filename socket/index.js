const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("New Connection: ", socket.id);

  // listen to a connection
  socket.on("AddNewUser", (userId) => {
    // check user is online or not , if not then push it to array
    !onlineUsers.some((user) => user.userId === userId) &&
      onlineUsers.push({
        userId,
        socketId: socket.id,
      });
    console.log("Online users:", onlineUsers);
    io.emit("getOnlineUsers", onlineUsers);
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });
});

io.listen(8080);
