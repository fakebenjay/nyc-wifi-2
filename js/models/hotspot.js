class Hotspot {
  constructor(objectId, ssid, location, city, boro, locationType, type, latitude, longitude, name, provider, distance) {
    this.objectId = objectId
    this.ssid = ssid
    this.location = location
    this.city = city
    this.boro = boro
    this.locationType = locationType
    this.type = type
    this.latitude = parseFloat(latitude)
    this.longitude = parseFloat(longitude)
    this.name = name
    this.provider = provider
    this.distance = distance
  }

  static all() {
    return HotspotApi.getJSON("views/yjub-udmw/rows.json")
    .then((data) => {
      return data.map(this.modelize)
    })
  }

  static weedOut() {
    return Hotspot.all()
    .then(this.filterOutTimeWarner)
    .then(this.filterOutCablevision)
    .then(this.filterOutATT)
  }

  static localize() {
    let locationPromise = Here.whereAmI()
    let hotspotPromise = Hotspot.weedOut()

    return Promise.all([locationPromise, hotspotPromise])
    .then(([locationResult, data]) => {
      console.log(locationResult)
      console.log(data)
      return data.filter((data) => {
        return this.distance(data, locationResult)
      })
    })
  }

  static filterOutTimeWarner(hotspots) {
    if (!$('input#time-warner').prop('checked')) {
      return hotspots.filter((h) => `${h.type}, ${h.provider}` !== `Limited Free, Time Warner Cable`)
    }
    return hotspots
  }

  static filterOutCablevision(hotspots) {
    if (!$('input#cablevision').prop('checked')) {
      return hotspots.filter((h) => `${h.type}, ${h.provider}` !== `Limited Free, Cablevision`)
    }
    return hotspots
  }

  static filterOutATT(hotspots) {
    if (!$('input#att').prop('checked')) {
      return hotspots.filter((h) => `${h.type}, ${h.provider}` !== `Limited Free, AT&T`)
    }
    return hotspots
  }

  static modelize(hotspot) {
    return new Hotspot(
      hotspot[8],
      hotspot[21],
      hotspot[13],
      hotspot[20],
      hotspot[9],
      hotspot[18],
      hotspot[10],
      hotspot[14],
      hotspot[15],
      hotspot[12],
      hotspot[11]
    )
  }

  static distance(hotspot, locationResult) {
    if ($('select#measure').val() === 'kilometers') {
      var earthRadius = 6371;
    } else if ($('select#measure').val() === 'miles') {
      var earthRadius = 3959;
    }

    var myLatitudeRads = locationResult.lat * (Math.PI / 180);
    var myLongitudeRads = locationResult.lng * (Math.PI / 180);

    var lat1 = hotspot.latitude * (Math.PI / 180);
    var long1 = hotspot.longitude * (Math.PI / 180);

    var y0 = myLatitudeRads * earthRadius;
    var x0 = myLongitudeRads * earthRadius * Math.cos(myLatitudeRads);

    var y1 = lat1 * earthRadius;
    var x1 = long1 * earthRadius * Math.cos(lat1);

    var dy = y0 - y1;
    var dx = x0 - x1;

    var d = Math.sqrt((dx * dx) + (dy * dy));

    hotspot.distance = Number((d).toFixed(2))

    return d <= $('input#distance').val()
  }
}
