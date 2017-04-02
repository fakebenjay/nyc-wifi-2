class SearchController {
  constructor($target, mapCont){
    this.$target = $target
    this.mapCont = mapCont
    this.attachListeners()
  }
  attachListeners() {
    $(this.$target).on('click', 'button.button', (e) => {
      e.preventDefault()

      hotspots = Hotspot.localize()
      debugger
      console.log(hotspots)
      map = MapView.initMap()
    })
  }
}
