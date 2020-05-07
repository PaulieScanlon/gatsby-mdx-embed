import { createScriptTag } from './utils'

exports.wrapRootElement = require(`./provider`)

let isFlickrScriptAdded = false
const flickrEmbedClassNames = [`.flickr-embed-mdx`].join(`,`)
const flickrEmbedUrl = `https://embedr.flickr.com/assets/client-code.js`

export const onRouteUpdate = () => {
  if (document.querySelector(flickrEmbedClassNames) !== null) {
    if (!isFlickrScriptAdded) {
      createScriptTag(flickrEmbedUrl, null)
      isFlickrScriptAdded = true
    }
  }
}
