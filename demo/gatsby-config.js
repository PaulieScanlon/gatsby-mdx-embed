module.exports = {
  siteMetadata: {
    title: `@pauliescanlon/gatsby-mdx-embed`,
    description: `gatsby-mdx-embed is....`,
    siteURL: "https://gatsby-mdx-embed.netlify.com",
    siteImage: "images/mdx-embed-main-og-image.jpg",
    author: "@pauliescanlon",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-theme-ui`,
    `@pauliescanlon/gatsby-mdx-embed`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: `${__dirname}/src/layouts/layout.js`,
        },
      },
    },
  ],
}
