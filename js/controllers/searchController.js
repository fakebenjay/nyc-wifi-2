class SearchController {
  constructor() {
    this.attachListeners()
  }
  attachListeners() {
    $(this.$target).on('click', 'button.button', (e) => {
      e.preventDefault()
      MapView.initMap()
    })
  }
}
