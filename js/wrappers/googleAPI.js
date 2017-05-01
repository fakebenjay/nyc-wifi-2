class GoogleApi {
  static apiCall() {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/js?key=AIzaSyDMTb0GRf25LLNd8nYusd2sALCG0DYtLt4`,
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response) {
        return response;
      }
    });
  }
}
