const path = require("path")

const directoryPath = path.join(
  process.cwd(),
  "../@pauliescanlon/gatsby-mdx-embed/lib/src/components"
)

export default {
  title: "gatsby-mdx-embed",
  description:
    "gatsby-mdx-embed is an mdx plugin to embed YouTube, Twitter etc into .mdx without imports",
  base: "https://gatsby-mdx-embed.netlify.com/",
  ogImage: "mdx-embed-main-og-image.jpg",
  menu: ["Getting Started"],
  typescript: true,
  docgenConfig: {
    searchPath: directoryPath,
  },
  themeConfig: {
    initialColorMode: "light",
  },
}
