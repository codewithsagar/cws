import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image/withIEPolyfill";
export default () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { sourceInstanceName: { eq: "featured" } }) {
        edges {
          node {
            ext
            name
            relativeDirectory
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const arr = data.allFile.edges;
  return (
    <div className="portfolioPre">
      <h5>
        Made with Love <p>:)</p>
      </h5>
      <div className="gallery ">
        {arr.map((item) => {
          return (
            <Link to="/portfolio">
              <Img
                fluid={item.node.childImageSharp.fluid}
                imgStyle={{ borderRadius: "10px" }}
                className="evei"
              />
            </Link>
          );
        })}
      </div>
      <div className="more">
        <Link to="/portfolio"> Check All</Link>
      </div>
    </div>
  );
};
