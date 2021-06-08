import React from "react";
import PropTypes from "prop-types";

Post.propTypes = {};

function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header--author">
          <img src="https://via.placeholder.com/36x36" alt="" />
          <h2 className="post__header--author--name">__Doopoo</h2>
        </div>
        <div className="post__header--more">...</div>
      </div>
      <div className="post__media">
        <img src="https://via.placeholder.com/600x600" alt="" />
      </div>
      <div className="post__content">
        <div className="post__content--dialog">
          <div className="post__content--dialog-icon">
            <i class="icofont-heart-alt"></i>
            <i class="icofont-speech-comments"></i>
            <i class="icofont-paper-plane"></i>
          </div>
          <div className="post__content--dialog-note">
            <i class="icofont-ui-note"></i>
          </div>
        </div>
        <div className="post__content--quantity-dialog">1,235 like</div>
        <div className="post__content--author">
          <div className="post__content--author--name">__doopoo</div>
          <div className="post__content--author--title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          </div>
        </div>
        <div className="post__content--comments">
          <i class="icofont-life-buoy"></i>
          <input type="text" placeholder="Add a comment" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
