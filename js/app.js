$(() => {
  $loadScreen = $('div#loading').hide()
  $button = $('.button')
  $mapArea = $('div#map').hide()
  let sCont = new SearchController($button, $mapArea, $loadScreen)
})
