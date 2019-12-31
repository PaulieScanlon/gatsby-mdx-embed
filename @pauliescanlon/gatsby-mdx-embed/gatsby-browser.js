exports.onRouteUpdate = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    console.log("window.twttr.widgets.load()")
    window.twttr.widgets.load(document.getElementById("___gatsby"))
  }

  if (
    typeof window.instgrm !== `undefined` &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process === `function`
  ) {
    window.instgrm.Embeds.process()
  }
}
