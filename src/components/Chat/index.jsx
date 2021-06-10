import React from "react";
import { useState, useEffect } from "react";
// api
import { getAllUsers } from "../../api/user.api";
import { joinRoomChat } from "../../api/socket";
// import socket.io-client
import io from "socket.io-client";
import PropTypes from "prop-types";
// sub component
import ListChat from "./ListChat";
import AreaChat from "./AreaChat";
// manage state
import { useRecoilValue } from "recoil";
import { adminState } from "../../state/adminState";
import "../../style/chat.css";

const socket = io("ws://localhost:4000", {
  upgrade: false,
  transports: ["websocket"],
});

socket.on("connect", () => {
  console.log(socket.id);
  console.log("da ket noi");
});

Chat.propTypes = {};

function Chat(props) {
  const [isTexting, setIsTexting] = useState(false);
  const admin = useRecoilValue(adminState);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async function fetchData() {
      let users = await getAllUsers("http://localhost:4000/user/getallusers");
      users = users.data;
      setAllUsers(users);
    })();
  }, []);

  function handleTexting(user) {
    const users = { users: [admin, user] };
    (async () => {
      let response = await joinRoomChat("http://localhost:4000/room", users);
    })();
    setIsTexting(true);
  }

  // handle socket.io

  return (
    <div className="chat-container">
      <div className="chat">
        <ListChat handleTexting={handleTexting} users={allUsers} />
        <AreaChat isTexting={isTexting} sendMessage={handleEventSend} />
      </div>
    </div>
  );
}

function handleEventSend(e) {}

export default Chat;
