$(function() {
    $.ajax({
        type: "get",
        url: "/getalluser",
        data: {},
        success: function(res) {
            console.log(res);

        }
    });

});