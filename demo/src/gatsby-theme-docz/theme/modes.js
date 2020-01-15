import * as colors from "./colors"
import styles from "./styles"
import prismDark from "gatsby-theme-docz/src/theme/prism/dark"
import prismLight from "gatsby-theme-docz/src/theme/prism/light"

export const light = {
  ...colors,
  styles: {
    ...styles,
  },
  primary: colors.primaryLightMode,
  text: colors.grayDark,
  muted: colors.gray,
  link: colors.primaryLightMode,
  background: colors.white,
  border: colors.grayLight,
  sidebar: {
    bg: colors.white,
    navGroup: colors.grayDark,
    navLink: colors.grayDark,
    navLinkActive: colors.primaryLightMode,
    tocLink: colors.gray,
    tocLinkActive: colors.grayExtraDark,
  },
  header: {
    bg: colors.grayExtraLight,
    text: colors.grayDark,
    border: colors.grayLight,
    button: {
      bg: colors.primaryLightMode,
      color: colors.white,
    },
  },
  props: {
    bg: colors.grayUltraLight,
    text: colors.grayDark,
    highlight: colors.primaryLightMode,
    defaultValue: colors.gray,
    descriptionText: colors.grayDark,
    descriptionBg: colors.white,
  },
  playground: {
    bg: colors.white,
    border: colors.grayLight,
  },
  blockquote: {
    bg: colors.grayExtraLight,
    border: colors.grayLight,
    color: colors.gray,
  },
  prism: {
    ...prismLight,
  },
}

export const dark = {
  ...colors,
  primary: colors.primaryDarkMode,
  text: colors.grayExtraLight,
  muted: colors.gray,
  link: colors.primaryDarkMode,
  background: colors.grayExtraDark,
  border: colors.grayDark,
  sidebar: {
    bg: colors.grayExtraDark,
    navGroup: colors.gray,
    navLink: colors.grayLight,
    navLinkActive: colors.primaryDarkMode,
    tocLink: colors.gray,
    tocLinkActive: colors.grayLight,
  },
  header: {
    bg: colors.dark,
    text: colors.grayLight,
    border: colors.grayDark,
    button: {
      bg: colors.primaryDarkMode,
      color: colors.white,
    },
  },
  props: {
    bg: colors.dark,
    text: colors.gray,
    highlight: colors.primaryDarkMode,
    defaultValue: colors.grayDark,
    descriptionText: colors.gray,
    descriptionBg: colors.grayExtraDark,
  },
  playground: {
    bg: colors.dark,
    border: colors.grayDark,
  },
  blockquote: {
    bg: colors.grayDark,
    border: colors.gray,
    color: colors.gray,
  },
  prism: {
    ...prismDark,
  },
}
