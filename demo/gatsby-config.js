module.exports = {
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,
    `gatsby-theme-docz`,
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76055934-5",
      },
    },
  ],
}
