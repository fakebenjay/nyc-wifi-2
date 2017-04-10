class GoogleApi {
  static apiCall() {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyB23NtAbSljbilSuh69CpWbLWS810ZmUWU`,
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response) {
        return response;
      }
    });
  }
}
