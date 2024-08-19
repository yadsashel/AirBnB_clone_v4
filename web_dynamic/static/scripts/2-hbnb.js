$(document).ready(function() {
    const url = 'https://54.162.94.68/api/v1/status/';
    $.get(url, function (response) {
        if (response.status === 'OK') {
            $('#api_status').addClass('available');
        } else {
            $('#api_status').removeClass('available');
        }
    });

});
