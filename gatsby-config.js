module.exports = {
  siteMetadata: {
    title: `Blog de Jorge Miranda`,
    description: `Blog sobre programación Full Stack, de React, React Native, Next, Gatsby, Node, Mongo, Express`,
    author: `@jorgemiru`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://blog-strapi-jorge.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`post`],
      },
    },
    //{
    //resolve: `gatsby-plugin-manifest`,
    //options: {
    // name: `gatsby-starter-default`,
    //short_name: `starter`,
    //start_url: `/`,
    //background_color: `#663399`,
    //theme_color: `#663399`,
    //display: `minimal-ui`,
    //icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    // },
    //},
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
