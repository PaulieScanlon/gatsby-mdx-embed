import { createScriptTag } from '../../utils'

let isTikTokScriptAdded = false
const tikTokClassNames = `._embed_video_wrapper`
const tikTokEmbedUrl = `https://www.tiktok.com/embed.js`

export const handleTikTokLoad = () => {
  if (document.querySelector(tikTokClassNames) !== null) {
    if (!isTikTokScriptAdded) {
      createScriptTag(tikTokEmbedUrl, null)
      isTikTokScriptAdded = true
    }
  }
}
