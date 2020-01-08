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

export const createScriptTag = (providerEmbedUrl, providerEmbedScript) => {
  const script = document.createElement(`script`)

  script.type = `text/javascript`

  if (providerEmbedScript) {
    script.innerText = providerEmbedScript
  }

  if (providerEmbedUrl) {
    script.src = providerEmbedUrl
  }

  script.onerror = error => {
    throw error
  }

  document.getElementsByTagName(`head`)[0].appendChild(script)
}

export const createStyleSheet = stylesheet => {
  const link = document.createElement(`link`)

  link.type = `text/css`
  link.rel = `stylesheet`
  link.href = stylesheet

  document.getElementsByTagName(`head`)[0].appendChild(link)
}
