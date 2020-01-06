const path = require("path")

const directoryPath = path.join(
  process.cwd(),
  "../@pauliescanlon/gatsby-mdx-embed/src/components"
)

export default {
  title: "gatsby-mdx-embed",
  description: "gatsby-mdx-embed is....",
  menu: ["Getting Started", { name: "Components" }],
  docgenConfig: {
    searchPath: directoryPath,
  },
  themeConfig: {
    initialColorMode: "dark",
  },
}
