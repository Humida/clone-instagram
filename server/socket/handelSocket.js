module.exports = handleSocket;

function handleSocket(socket) {
  console.log(socket.id);
  socket.emit("a", "xin chao m");
}
