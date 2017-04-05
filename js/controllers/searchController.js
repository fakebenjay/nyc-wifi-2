class SearchController {
  constructor($button, $mapArea, $loadScreen) {
    this.$button = $button
    this.$mapArea = $mapArea
    this.$loadScreen = $loadScreen
    this.attachListeners()
  }
  attachListeners() {
    $(this.$button).on('click', (e) => {
      e.preventDefault()
      $mapArea.hide()
      $loadScreen.show()
      var hotspots = Hotspot.localize()
      var locationPromise = Here.whereAmI()
      Promise.all([locationPromise, hotspots])
      .then(([locationResult, data]) => {
        $mapArea.show()
        $loadScreen.hide()
        MapView.initMap(this.$mapArea, locationResult, data)
      })
    })
  }
}
