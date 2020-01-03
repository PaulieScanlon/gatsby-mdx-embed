import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
import wordpress2016 from "typography-theme-wordpress-2016"
import merge from "deepmerge"

const theme = toTheme(wordpress2016)

const purple60 = `#663399`
// const purple30 = `#D9BAE8`
const grey90 = `#232129`
const black80 = `#1B1F23`
const white = `#fff`
// const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 100, 0.2)`
// const opaqueLightWhite = `hsla(0, 0%, 100%, 0.2)`
const lightGray = `hsla(0, 0%, 0%, 0.2)`

export default merge(theme, {
  colors: {
    text: grey90,
    background: white,
    primary: purple60,
    secondary: black80,
    muted: lightGray,
    highlight: opaqueLightYellow,
    heading: grey90,
  },
  fonts: {
    heading: `Montserrat, sans-serif`,
    body: `font-family: Merriweather, Georgia, serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  styles: {
    root: {
      fontFamily: `body`,
    },
    pre: {
      // variant: `prism`,
      fontFamily: `monospace`,
      tabSize: 4,
      // hyphens: `none`,
      marginBottom: 2,
      color: `white`,
      backgroundColor: `highlight`,
      overflow: `auto`,
      borderRadius: 10,
      p: 3,
      code: {
        color: `text`,
      },
    },
    code: {
      fontFamily: `monospace`,
      fontSize: `95%`,
    },
    inlineCode: {
      borderRadius: `0.3em`,
      color: `secondary`,
      bg: `highlight`,
      paddingTop: `0.15em`,
      paddingBottom: `0.05em`,
      paddingX: `0.2em`,
    },
    a: {
      border: "1px solid red",
      fontFamily: "body",
      color: `secondary`,
      ":active": {
        color: "inherit",
      },
    },
    hr: {
      borderColor: `muted`,
    },
    p: {
      code: {
        fontFamily: `monospace`,
        fontSize: `95%`,
      },
    },
    li: {
      code: {
        fontSize: `inherit`,
      },
    },
    blockquote: {
      color: `inherit`,
      borderLeftColor: `inherit`,
      opacity: 0.8,
      "&.translation": {
        fontSize: `1em`,
      },
    },
  },
})
