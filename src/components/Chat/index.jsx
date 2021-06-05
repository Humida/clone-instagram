import React from "react";
import PropTypes from "prop-types";
import ListChat from "./ListChat";
import AreaChat from "./AreaChat";

import "../../style/chat.css";

Chat.propTypes = {};

function Chat(props) {
  return (
    <div className="chat-container">
      <div className="chat">
        <ListChat />
        <AreaChat />
      </div>
    </div>
  );
}

export default Chat;
