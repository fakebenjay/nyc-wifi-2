class HotspotApi {
  static getJSON(resource) {
    return $.getJSON(`https://data.cityofnewyork.us/api/${resource}`)
    .then((response) => {
      return response.data
    })
  }
}
