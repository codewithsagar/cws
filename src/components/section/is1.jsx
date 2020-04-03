import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default (props) => {
  const data = useStaticQuery(graphql`
    query Is3 {
      file(relativePath: { eq: "images/is1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <div className="is1">
      <div className="is1-container container">
        <div className="img">
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
        <div className="is1-cont">
          <h5>Hello, Hola!</h5>
          <h4>
            My name is {props.name}. {props.secondTagline}
          </h4>
          <p>{props.text}</p>
          <a href={`tel:${props.mobile}`}>Contact Me</a>
        </div>
      </div>
    </div>
  );
};
