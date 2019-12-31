const loadTwitter = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    console.log("loadTwitter")
    window.twttr.widgets.load(document.getElementById("___gatsby"))
  }
}

const processInstagram = () => {
  if (
    typeof window.instgrm !== `undefined` &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process === `function`
  ) {
    console.log("processInstagram")
    window.instgrm.Embeds.process()
  }
}

exports.onRouteUpdate = () => {
  loadTwitter()
  processInstagram()
}
