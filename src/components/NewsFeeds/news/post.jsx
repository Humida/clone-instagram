import React from "react";
import PropTypes from "prop-types";

Post.propTypes = {};

function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header--author">
          <img src="https://via.placeholder.com/64x64" alt="" />
          <h2 className="post__header--author--name"></h2>
        </div>
        <div className="post__header--more">...</div>
      </div>
      <div className="post__media"></div>
      <div className="post__content">
        <div className="post__content--dialog"></div>
        <div className="post__content--quantity-dialog"></div>
        <div className="post__content--title"></div>
        <div className="post__content--comments"></div>
      </div>
    </div>
  );
}

export default Post;
