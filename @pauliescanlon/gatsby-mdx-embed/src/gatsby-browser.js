import { createScriptTag } from './utils'
export { wrapRootElement } from './wrapRootElement'

let isTwttrScriptAdded = false
const twttrClassNames = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-mention-button`,
  `.twitter-hashtag-button`
].join(`,`)
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
  `.instagram-media-rendered`
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

let isPinterestScriptAdded = false
const pinterestEmbedClassNames = [
  `.pinterest-pin`,
  `.pinterest-board`,
  `.pinterest-follow-button`
].join(`,`)
const pinterestEmbedScript = `!function(a,b,c){var d,e,f;d="PIN_"+~~((new Date).getTime()/864e5),a[d]?a[d]+=1:(a[d]=1,a.setTimeout(function(){e=b.getElementsByTagName("SCRIPT")[0],f=b.createElement("SCRIPT"),f.type="text/javascript",f.async=!0,f.src=c.mainUrl+"?"+Math.random(),e.parentNode.insertBefore(f,e)},10))}(window,document,{mainUrl:"//assets.pinterest.com/js/pinit_main.js"});`

const pinterestBuild = () => {
  if (
    typeof window.PinUtils !== `undefined` &&
    window.PinUtils &&
    typeof window.PinUtils.build === `function`
  ) {
    window.PinUtils.build()
  }
}

export const onRouteUpdate = () => {
  if (document.querySelector(twttrClassNames) !== null) {
    if (!isTwttrScriptAdded) {
      createScriptTag(null, twttrEmbedScript)
      isTwttrScriptAdded = true
    }
  }

  if (document.querySelector(instgrmClassNames) !== null) {
    if (!isInstgrmScriptAdded) {
      createScriptTag(instgrmEmbedUrl, null)
      isInstgrmScriptAdded = true
    }
  }

  if (document.querySelector(flickrEmbedClassNames) !== null) {
    if (!isFlickrScriptAdded) {
      createScriptTag(flickrEmbedUrl, null)
      isFlickrScriptAdded = true
    }
  }

  if (document.querySelector(pinterestEmbedClassNames) !== null) {
    if (!isPinterestScriptAdded) {
      createScriptTag(null, pinterestEmbedScript)
      isPinterestScriptAdded = true
    }
  }

  pinterestBuild()
  twttrLoad()
  instgrmProcess()
}
