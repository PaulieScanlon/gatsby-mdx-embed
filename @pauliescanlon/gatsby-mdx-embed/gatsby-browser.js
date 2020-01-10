import { createScriptTag } from "./src/utils"
export { wrapRootElement } from "./src/wrapRootElement"

let isTwttrScriptAdded = false
const twttrClassNames = [`.twitter-tweet`].join(`,`)
const twttrEmbedScript = `
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")
`

const twttrLoad = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    window.twttr.widgets.load(document.getElementById(`___gatsby`))
  }
}

let isInstgrmScriptAdded = false
const instgrmClassNames = [
  `.instagram-media`,
  `.instagram-media-rendered`,
].join(`,`)
const instgrmEmbedUrl = `https://www.instagram.com/embed.js`

const instgrmProcess = () => {
  if (
    typeof window.instgrm !== `undefined` &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process === `function`
  ) {
    window.instgrm.Embeds.process()
  }
}

let isFlickrScriptAdded = false
const flickrEmbedClassNames = [`.flickr-embed-mdx`].join(`,`)
const flickrEmbedUrl = `https://embedr.flickr.com/assets/client-code.js`

export const onRouteUpdate = () => {
  if (document.querySelector(twttrClassNames) !== null) {
    if (!isTwttrScriptAdded) {
      createScriptTag(null, twttrEmbedScript, null, null, null)
      isTwttrScriptAdded = true
    }
  }

  if (document.querySelector(instgrmClassNames) !== null) {
    if (!isInstgrmScriptAdded) {
      createScriptTag(instgrmEmbedUrl, null, null, null, null)
      isInstgrmScriptAdded = true
    }
  }

  if (document.querySelector(flickrEmbedClassNames) !== null) {
    if (!isFlickrScriptAdded) {
      createScriptTag(flickrEmbedUrl, null, null, null, null)
      isFlickrScriptAdded = true
    }
  }

  twttrLoad()
  instgrmProcess()
}
