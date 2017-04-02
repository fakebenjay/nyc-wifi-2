class HotspotView {
  static listItemTemplate(hotspot) {
    return `<div id="hotspot-details">
    <h3> SSID: ${hotspot.ssid}</h3>
    <div> Location/Address: ${hotspot.location}, ${hotspot.city}</div>
    <div> Boro: ${hotspot.boro}</div>
    <div> Location Type: ${hotspot.locationType}</div>
    <div> Name: ${hotspot.name}</div>
    <div> Provider: ${hotspot.provider}</div>
    <div>${hotspot.latitude}, ${hotspot.longitude}</div>
    </div><br>`
  }
}
