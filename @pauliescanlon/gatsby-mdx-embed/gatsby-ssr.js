import React from "react"

const providers = [
  {
    name: "twitter",
    url: "https://platform.twitter.com/widgets.js",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/embed.js",
  },
  {
    name: "flickr",
    url: "https://embedr.flickr.com/assets/client-code.js",
  },
]

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
  const providerScriptTags = providers
    .filter(provider => {
      if (pluginOptions.exclude) {
        return !pluginOptions.exclude.includes(provider.name)
      }
      return provider
    })
    .map((provider, index) => (
      <script key={`${provider.name}-${index}`} src={`${provider.url}`} />
    ))

  setHeadComponents([...providerScriptTags])
}
