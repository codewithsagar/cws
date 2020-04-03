import React from "react";
import { useStaticQuery, graphql } from "gatsby";
export default props => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h5>Hello, I'm {props.name}.</h5>
        <p>{props.heroTagline}</p>
      </div>
    </div>
  );
};
