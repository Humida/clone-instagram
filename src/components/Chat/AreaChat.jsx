import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

AreaChat.propTypes = {
  isTexting: PropTypes.bool,
};

function AreaChat(props) {
  const { isTexting, handleEventSend } = props;
  return (
    <div className="areachat__container">
      {isTexting ? (
        <Chating handleEventSend={handleEventSend} />
      ) : (
        <EmptyChat />
      )}
    </div>
  );
}

function EmptyChat(props) {
  return (
    <div className="areachat">
      <div className="areachat__nochat">
        <div className="areachat__nochat-create-new">
          <i class="icofont-paper-plane"></i>
        </div>
        <div className="areachat__desc">
          <h2>Your Messages</h2>
          <p>Send private photos and messages to a friend or group.</p>
        </div>
        <button>Send Message</button>
      </div>
    </div>
  );
}

function Chating(props) {
  const { handleEventSend } = props;
  function getTextMessage(e) {
    console.log(e.target.value);
  }
  return (
    <div div className="chating">
      <div className="chating__room">
        <div className="room__info">
          <img src="" alt="" />
          <p className="room__info-name">may__ne</p>
        </div>
        <div className="room__option">...</div>
      </div>
      <div className="chating__body"></div>
      <div className="chating__send">
        <input onChange={getTextMessage} type="text" />
        <button onClick={handleEventSend}>Send</button>
      </div>
    </div>
  );
}

export default AreaChat;
