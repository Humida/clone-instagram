import React from "react";
import PropTypes from "prop-types";

// import api
import { render } from "@testing-library/react";

ListChat.propTypes = {
  users: PropTypes.array,
  handleTexting: PropTypes.func,
};

function ListChat(props) {
  const { handleTexting, users } = props;
  return (
    <div className="listchat">
      <div className="listchat__user">
        <div className="listchat__user-name">__doopoo</div>
        <div className="listchat__user-create-new-message">
          <i class="icofont-paper-plane"></i>
        </div>
      </div>

      <div className="listchat__container">
        {users.map((user) => {
          return (
            <div
              className="listchat__item"
              key={user._id}
              onClick={() => {
                handleTexting(user);
              }}
            >
              <img src="https://via.placeholder.com/56x56" alt="" />
              <div className="listchat__item-desc">
                <div className="desc__nickname">{user.username}</div>
                <div className="desc__lastmessage">Chao m</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListChat;
