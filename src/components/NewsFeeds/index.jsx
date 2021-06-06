import React from "react";
import PropTypes from "prop-types";
import News from "./news";
import Recommends from "./recommends";
import "../../style/newfeeds.css";

NewFeeds.propTypes = {};

function NewFeeds(props) {
  return (
    <div className="newfeeds">
      <News />
      <Recommends />
    </div>
  );
}

export default NewFeeds;
