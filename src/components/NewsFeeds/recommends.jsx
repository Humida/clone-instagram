import React from "react";
import PropTypes from "prop-types";

Recommends.propTypes = {};

function Recommends(props) {
  return (
    <div className="recommends">
      <div className="recommends__user">
        <div className="recommends__user--container">
          <img src="https://via.placeholder.com/64x64" alt="" />
          <div className="user__info">
            <h2 className="user__username">doo__poo</h2>
            <p className="user__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Switch</p>
      </div>
      <div className="recommends__desc">
        <h2>Suggestions For You</h2>
        <p>See all</p>
      </div>

      <div className="recommends__friends">
        <div className="recommeds__friend--container">
          <img src="https://via.placeholder.com/42x42" alt="" />
          <div className="friend__info">
            <h2 className="friend__username">doo__poo</h2>
            <p className="friend__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Follow</p>
      </div>
      <div className="recommends__friends">
        <div className="recommeds__friend--container">
          <img src="https://via.placeholder.com/42x42" alt="" />
          <div className="friend__info">
            <h2 className="friend__username">doo__poo</h2>
            <p className="friend__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Follow</p>
      </div>
      <div className="recommends__friends">
        <div className="recommeds__friend--container">
          <img src="https://via.placeholder.com/42x42" alt="" />
          <div className="friend__info">
            <h2 className="friend__username">doo__poo</h2>
            <p className="friend__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Follow</p>
      </div>
      <div className="recommends__friends">
        <div className="recommeds__friend--container">
          <img src="https://via.placeholder.com/42x42" alt="" />
          <div className="friend__info">
            <h2 className="friend__username">doo__poo</h2>
            <p className="friend__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Follow</p>
      </div>
      <div className="recommends__friends">
        <div className="recommeds__friend--container">
          <img src="https://via.placeholder.com/42x42" alt="" />
          <div className="friend__info">
            <h2 className="friend__username">doo__poo</h2>
            <p className="friend__desc">Nothing</p>
          </div>
        </div>
        <p user__switch>Follow</p>
      </div>
    </div>
  );
}

export default Recommends;
