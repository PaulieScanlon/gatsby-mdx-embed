export const getPadding = aspectRatio => {
  const config = {
    "1:1": {
      getPadding: "100%",
    },
    "16:9": {
      paddingTop: "56.25%",
    },
    "4:3": {
      paddingTop: "75%",
    },
    "3:2": {
      paddingTop: "66.66%",
    },
    "8.5": {
      paddingTop: "62.5%",
    },
  }
  return config[aspectRatio]
}
