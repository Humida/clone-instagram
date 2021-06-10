function handleSocket(socket) {
  socket.on("a", (a) => {
    console.log(a);
  });
}

module.exports = handleSocket;
