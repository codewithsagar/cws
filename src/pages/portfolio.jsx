import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { motion } from "framer-motion";
export default () => {
  const data = useStaticQuery(graphql`
    query portfoliomain {
      allFile(filter: { sourceInstanceName: { eq: "portfolio" } }) {
        edges {
          node {
            ext
            name
            relativeDirectory
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  const arr = data.allFile.edges;
  console.log(arr[0].node.relativeDirectory);
  return (
    <div className="mainPort">
      <div className="title">
        <h1>Handcrafted by Me</h1>
      </div>
      <div className="mainPortCont">
        <div className="gallery ">
          {arr.map((item, index) => {
            return (
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ delay: index / 3 }}
                style={{ position: "relative" }}
              >
                <div className="evei2" data-alt={item.node.relativeDirectory}>
                  <Img
                    fluid={item.node.childImageSharp.fluid}
                    imgStyle={{ borderRadius: "10px" }}
                    alt={item.node.relativeDirectory}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
