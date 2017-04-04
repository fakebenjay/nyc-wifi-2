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
      var hotspots = Hotspot.localize() //Lines 10-13 & 15 were greyed out in MapView.js
      var locationPromise = Here.whereAmI()
      $loadScreen.show()
      Promise.all([locationPromise, hotspots])
      .then(([locationResult, data]) => {
        $mapArea.show()
        $loadScreen.hide()
        MapView.initMap(this.$mapArea, locationResult, data) //Line 14 was modified to handle more params
      })
    })
  }
}

//Above changes made with help of Professor Steven Nunez
