module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    `@pauliescanlon/gatsby-mdx-embed`
  ]
};
