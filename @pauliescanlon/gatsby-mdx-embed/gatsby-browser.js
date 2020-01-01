const createScriptTag = providerEmbedScript => {
  const script = document.createElement(`script`)

  script.type = `text/javascript`
  script.innerText = providerEmbedScript
  document.getElementsByTagName(`head`)[0].appendChild(script)
}

const twttrLoad = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    window.twttr.widgets.load(document.getElementById(`___gatsby`))
  }
}

let isTwttrScriptAdded = false
const twttrClassNames = [`.twitter-tweet`].join(`,`)
const twttrEmbedScript = `
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs")
`

exports.onRouteUpdate = () => {
  if (document.querySelector(twttrClassNames) !== null) {
    if (!isTwttrScriptAdded) {
      createScriptTag(twttrEmbedScript)
      isTwttrScriptAdded = true
    }
  }

  twttrLoad()
}

// const instgrmProcess = () => {
//   if (
//     typeof window.instgrm !== `undefined` &&
//     window.instgrm.Embeds &&
//     typeof window.instgrm.Embeds.process === `function`
//   ) {
//     window.instgrm.Embeds.process()
//   }
// }

// const runProviders = () => {
//   twttrLoad()
//   instgrmProcess()
// }

// exports.onInitialClientRender = runProviders
// exports.onRouteUpdate = runProviders
