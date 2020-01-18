$(document).ready(function () {

    $("#submitWeather").click(function () {

        var APPID = "681f2e92554fd1aead71f73e526671ef";
        var city = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APPID;

        //     if (city != ""){

        //         $.ajax({
        //             url: queryURL,
        //             method: "GET"
        //           }).then(function(data) {
        //             console.log(data);

        //             console.log(queryURL);

        //           })

        //     } else {
        //         $("#error").html("Please enter a city");
        //     }

        // });

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (data) {
            console.log(data);

            console.log(queryURL);

        })


    });

});