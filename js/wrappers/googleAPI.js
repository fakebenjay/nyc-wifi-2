class GoogleApi {
  static apiCall() {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API_KEY}`,
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response) {
        return response;
      }
    });
  }
}
