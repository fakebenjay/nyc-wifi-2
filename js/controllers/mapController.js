class MapController {
  constructor($target) {
    this.$target = $target
  }

  displayMap() {
    mapView.initMap()
  }
}
