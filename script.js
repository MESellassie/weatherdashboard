$(document).ready(function () {

    $("#submitWeather").click(function (event) {

        event.preventDefault()


        var APPID = "681f2e92554fd1aead71f73e526671ef";
        var city = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&APPID=" + APPID;

        if (city != "") {

            var date = moment().format('l');

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                console.log(queryURL);
                // Targets the weather icon
                var weatherCode = response.weather[0].icon;
                // Appends the city name to the main header
                $(".cityHeader").append(city + " (" + date + " )");

                // Variable that appends the above weather code to a URL and places the corresponding icon in the div.
                var qURLweather = "http://openweathermap.org/img/wn/" + weatherCode + ".png";
                $("#wIcon").attr("src", qURLweather);

                // Var that appends temp to header
                var temperatureHeader = response.main.temp;
                $("#tempHeader").append(temperatureHeader);

                // Var that appends humidity to header
                var humHeader = response.main.humidity;
                $("#humidityHeader").append(humHeader);

                // Var that appends humidity to header
                var wSPDheader = response.wind.speed;
                $("#windHeader").append(wSPDheader);

                // Var that pulls UV Index & appends it to the header
                var latHeader = response.coord.lat;
                var lonHeader = response.coord.lon;
                console.log(latHeader);
                console.log(lonHeader);
                var queryUV = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APPID + "&lat=" + latHeader + "&lon=" + lonHeader;
                
                $.ajax({
                    url: queryUV,
                    method: "GET"
                }).then(function (response) {
                    var UV= response.value;
                    $("#UVHeader").append(UV);
                })

                var cityID = response.id
                console.log(cityID)
                var query5Day = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APPID;
                $.ajax({
                    url: queryUV,
                    method: "GET"
                }).then(function (response) {
                    console.log(query5Day);

                    var day1Date = moment().add(1, 'days').format('l');
                    console.log(day1Date);
                })



            })

        } else {
            $("#error").html("Please enter a city");
        }


    });


});