const aws = require('aws-sdk');

const key = process.env.GOOGLE_API_KEY

class GoogleApi {
  static apiCall() {
    return $.ajax({
      url: `https://maps.googleapis.com/maps/api/js?key=${key}`,
      type: "GET",
      dataType: 'jsonp',
      cache: false,
      success: function(response) {
        return response;
      }
    });
  }
}
