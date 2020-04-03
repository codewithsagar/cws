module.exports = {
  siteMetadata: {
    siteUrl: `https://www.codewithsagar.com`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `clients`,
        path: `${__dirname}/src/images/clients`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/src/images/featured`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/images/portfolio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        plugins: ["gatsby-tinacms-git", "gatsby-tinacms-json"],
        sidebar: {
          hidden: process.env.NODE_ENV === "production",
          position: "displace",
        },
      },
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
};
