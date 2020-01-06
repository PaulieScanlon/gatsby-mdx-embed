const path = require("path")

const directoryPath = path.join(
  process.cwd(),
  "../@pauliescanlon/gatsby-mdx-embed/src/components"
)

module.exports = {
  plugins: [
    `@pauliescanlon/gatsby-mdx-embed`,

    {
      resolve: "gatsby-theme-docz",
      options: {
        title: "gatsby-mdx-embed",
        description: "gatsby-mdx-embed is....",
        repository: "https://github.com/PaulieScanlon/gatsby-mdx-embed",
        docgenConfig: {
          searchPath: directoryPath,
        },
        themeConfig: {
          initialColorMode: "dark",
        },
      },
    },
  ],
}
