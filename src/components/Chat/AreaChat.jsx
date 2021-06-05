import React from "react";
import PropTypes from "prop-types";

AreaChat.propTypes = {};

function AreaChat(props) {
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

export default AreaChat;
