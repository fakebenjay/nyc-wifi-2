// class GoogleApi {
//   static apiCall() {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDMTb0GRf25LLNd8nYusd2sALCG0DYtLt4');
// //  return $.getJSON(`https://maps.googleapis.com/maps/api/js?key=AIzaSyDMTb0GRf25LLNd8nYusd2sALCG0DYtLt4&callback=initMap`)
//     xhr.send(null)
//   }
// }

class GoogleApi {
  static apiCall() {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}`,
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response) {
        console.log(response)
        return response;
      }
    });
  }
}
