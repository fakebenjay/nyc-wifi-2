class SearchController {
  constructor($button, $mapArea) {
    this.$button = $button
    this.$mapArea = $mapArea
    this.attachListeners()
  }
  attachListeners() {
    $(this.$button).on('click', (e) => {
      e.preventDefault()
      var hotspots = Hotspot.localize() //Lines 10-13 & 15 were greyed out in MapView.js
      var locationPromise = Here.whereAmI()
      Promise.all([locationPromise, hotspots])
      .then(([locationResult, data]) => {
        MapView.initMap(this.$mapArea, locationResult, data) //Line 14 was modified to handle more params
      })
    })
  }
}

//Above changes made with help of Professor Steven Nunez
