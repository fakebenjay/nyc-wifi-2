class MapView {
  static initMap() {
    var hotspots = Hotspot.localize()
    var locationPromise = Here.whereAmI()
    var map
    var infowindow
    var marker
    var hotspotMarkers
    var prevInfowindow = false

    Promise.all([locationPromise, hotspots])
    .then(([locationResult, data]) => {

      map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: locationResult
      });

      infowindow = new google.maps.InfoWindow({
        content: "<h2 id='where-im-at'>THIS IS WHERE YOU AT</h2>"
      });

      marker = new google.maps.Marker({
        position: locationResult,
        map: map
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      hotspotMarkers = data.map((hotspot) => {
        var hotspotInfowindow = new google.maps.InfoWindow({
          content: HotspotView.listItemTemplate(hotspot)
        });

        var hotspotMarker = new google.maps.Marker({
          position: {lat: hotspot.latitude, lng: hotspot.longitude},
          icon: 'http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_green.png',
          // http://kml4earth.appspot.com/icons.html
          map: map
        });
        hotspotMarker.addListener('click', function() {
          if(prevInfowindow) {
            prevInfowindow.close();
          }

          prevInfowindow = hotspotInfowindow;
          hotspotInfowindow.open(map, hotspotMarker);
        });
      })
    })
  }
}
