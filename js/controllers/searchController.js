class SearchController {
  constructor($button, $mapArea, $loadScreen) {
    this.$button = $button
    this.$mapArea = $mapArea
    this.$loadScreen = $loadScreen
    this.attachListeners()
  }
  attachListeners() {
    $(this.$button).on('click', (e) => {
      debugger
      e.preventDefault()
      debugger
      $mapArea.hide()
      debugger
      $loadScreen.show()
      debugger
      var hotspots = Hotspot.localize()
      var locationPromise = Here.whereAmI()
      Promise.all([locationPromise, hotspots])
      .then(([locationResult, data]) => {
        $mapArea.show()
        $loadScreen.hide()
        MapView.loadMap(this.$mapArea, locationResult, data)
      })
    })
  }
}
