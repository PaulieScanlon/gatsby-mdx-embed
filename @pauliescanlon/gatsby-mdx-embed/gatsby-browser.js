const loadTwitter = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    window.twttr.widgets.load(document.getElementById("___gatsby"))
  }
}

const processInstagram = () => {
  if (
    typeof window.instgrm !== `undefined` &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process === `function`
  ) {
    window.instgrm.Embeds.process()
  }
}

const initScripts = () => {
  console.log("initScripts")
  loadTwitter()
  processInstagram()
}

exports.onInitialClientRender = initScripts
exports.onRouteUpdate = initScripts
