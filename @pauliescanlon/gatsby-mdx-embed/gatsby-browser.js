const twttrLoad = () => {
  if (
    typeof window.twttr !== `undefined` &&
    window.twttr.widgets &&
    typeof window.twttr.widgets.load === `function`
  ) {
    window.twttr.widgets.load(document.getElementById("___gatsby"))
  }
}

const instgrmProcess = () => {
  if (
    typeof window.instgrm !== `undefined` &&
    window.instgrm.Embeds &&
    typeof window.instgrm.Embeds.process === `function`
  ) {
    window.instgrm.Embeds.process()
  }
}

const runProviders = () => {
  twttrLoad()
  instgrmProcess()
}

exports.onInitialClientRender = runProviders
exports.onRouteUpdate = runProviders
