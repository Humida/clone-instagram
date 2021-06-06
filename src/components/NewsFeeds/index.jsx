import React from "react";
import PropTypes from "prop-types";

// import sub components
import News from "../NewsFeeds/news";
import Recomments from "../NewsFeeds/recommends";

// import css
import "../../style/newfeeds.css";

NewFeeds.propTypes = {};

function NewFeeds(props) {
  return (
    <div className="newfeeds">
      <News />
      <Recomments />
    </div>
  );
}

export default NewFeeds;
