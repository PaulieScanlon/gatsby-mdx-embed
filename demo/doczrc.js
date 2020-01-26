const path = require("path")

export default {
  title: "gatsby-mdx-embed",
  description:
    "gatsby-mdx-embed is an mdx plugin to embed YouTube, Twitter, Instagram etc into .mdx without imports",
  base: "https://gatsby-mdx-embed.netlify.com/",
  ogImage: "mdx-embed-main-og-image.jpg",
  menu: ["Getting Started"],
  typescript: true,
  docgenConfig: {
    searchPath: path.resolve(
      __dirname,
      "../@pauliescanlon/gatsby-mdx-embed/src/components"
    ),
  },
  themeConfig: {
    initialColorMode: "light",
  },
}
