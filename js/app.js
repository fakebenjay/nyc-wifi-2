$(() => {
  let mapCont = new MapController($('div#map'))
  let sCont = new SearchController($('div#map'), mapCont)
})
