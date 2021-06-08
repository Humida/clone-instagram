import React from "react";
import PropTypes from "prop-types";

// import sub component
import Post from "./news/post";

News.propTypes = {};

function News(props) {
  return (
    <div className="news">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default News;
