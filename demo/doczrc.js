const path = require("path")

// path to tsx
// const directoryPath = path.join(
//   process.cwd(),
//   "../@pauliescanlon/gatsby-mdx-embed/src/components"
// )

//path to js created by babel
const directoryPath = path.join(
  process.cwd(),
  "../@pauliescanlon/gatsby-mdx-embed/components"
)

export default {
  title: "gatsby-mdx-embed",
  description:
    "gatsby-mdx-embed is an mdx plugin to embed YouTube, Twitter, Instagram etc into .mdx without imports",
  base: "https://gatsby-mdx-embed.netlify.com/",
  ogImage: "mdx-embed-main-og-image.jpg",
  menu: ["Getting Started"],
  // typescript: true,
  // filterComponents: files => {
  //   // console.log("files: ", files)
  //   console.log(
  //     "filter: ",
  //     files.filter(filepath => !/index.(js|jsx|ts|tsx)$/.test(filepath))
  //   )

  //   return files.filter(filepath => !/index.(js|jsx|ts|tsx)$/.test(filepath))
  // },
  docgenConfig: {
    searchPath: directoryPath,
  },
  themeConfig: {
    initialColorMode: "light",
  },
}
