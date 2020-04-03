import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
export default () => {
  const data = useStaticQuery(graphql`
    query galemb {
      allFile(filter: { sourceInstanceName: { eq: "clients" } }) {
        edges {
          node {
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
  return (
    <div className="clients">
      <h5>I'm proud to have collaborated with some awesome companies:</h5>
      <div className="clientsLogo">
        <div>
          <Image fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
        </div>
        <div>
          <Image fluid={data.allFile.edges[1].node.childImageSharp.fluid} />
        </div>
        <div>
          <Image fluid={data.allFile.edges[2].node.childImageSharp.fluid} />
        </div>
        <div>
          <Image fluid={data.allFile.edges[3].node.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  );
};
