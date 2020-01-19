$(document).ready(function () {

    $("#submitWeather").click(function (event) {

        event.preventDefault()

        $('input[type="search"]').each(function () {
            var id = $(this).attr('id');
            var value = $(this).val();
            localStorage.setItem(id, value);
            var value = localStorage.getItem(id);
            $("#city1").append(value + " ");
        });

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
                    var UV = response.value;
                    $("#UVHeader").append(UV);
                })

                // Call for the 5-Day forecast
                var cityID = response.id
                console.log(cityID)
                var query5Day = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APPID;
                $.ajax({
                    url: query5Day,
                    method: "GET"
                }).then(function (response) {
                    console.log(query5Day);
                    console.log(response);

                    // Day 1 Date
                    var day1Date = moment().add(1, 'days').format('l');
                    $("#day1DT").append(day1Date);
                    // Day 2 Date
                    var day2Date = moment().add(2, 'days').format('l');
                    $("#day2DT").append(day2Date);
                    // Day 3 Date
                    var day3Date = moment().add(3, 'days').format('l');
                    $("#day3DT").append(day3Date);
                    // Day 4 Date
                    var day4Date = moment().add(4, 'days').format('l');
                    $("#day4DT").append(day4Date);
                    // Day 5 Date
                    var day5Date = moment().add(5, 'days').format('l');
                    $("#day5DT").append(day5Date);

                    // Call to get Day 1 icon
                    var IconCodeDay1 = response.list[0].weather[0].icon;
                    var day1IconURL = "http://openweathermap.org/img/wn/" + IconCodeDay1 + ".png";
                    $("#day1Img").attr("src", day1IconURL);
                    console.log(IconCodeDay1);
                    // Call to get Day 2 icon
                    var IconCodeDay2 = response.list[1].weather[0].icon;
                    var day2IconURL = "http://openweathermap.org/img/wn/" + IconCodeDay2 + ".png";
                    $("#day2Img").attr("src", day2IconURL);
                    console.log(IconCodeDay2);
                    // Call to get Day 3 icon
                    var IconCodeDay3 = response.list[2].weather[0].icon;
                    var day3IconURL = "http://openweathermap.org/img/wn/" + IconCodeDay3 + ".png";
                    $("#day3Img").attr("src", day3IconURL);
                    console.log(IconCodeDay3);
                    // Call to get Day 4 icon
                    var IconCodeDay4 = response.list[3].weather[0].icon;
                    var day4IconURL = "http://openweathermap.org/img/wn/" + IconCodeDay4 + ".png";
                    $("#day4Img").attr("src", day4IconURL);
                    console.log(IconCodeDay4);
                    // Call to get Day 5 icon
                    var IconCodeDay5 = response.list[4].weather[0].icon;
                    var day5IconURL = "http://openweathermap.org/img/wn/" + IconCodeDay5 + ".png";
                    $("#day5Img").attr("src", day5IconURL);
                    console.log(IconCodeDay5);

                    // Call for Day 1 temp & the math to convert it from Kelvin to F
                    var tempDay1 = response.list[0].main.temp;
                    var tempDay1Math = (Math.ceil(tempDay1 - 273.15) * 9 / 5 + 32);
                    console.log(tempDay1Math);
                    $("#day1Temp").append(tempDay1Math);
                    // Call for Day 2 temp & the math to convert it from Kelvin to F
                    var tempDay2 = response.list[1].main.temp;
                    var tempDay2Math = (Math.ceil(tempDay2 - 273.15) * 9 / 5 + 32);
                    console.log(tempDay2Math);
                    $("#day2Temp").append(tempDay2Math);
                    // Call for Day 1 temp & the math to convert it from Kelvin to F
                    var tempDay3 = response.list[2].main.temp;
                    var tempDay3Math = (Math.ceil(tempDay3 - 273.15) * 9 / 5 + 32);
                    console.log(tempDay3Math);
                    $("#day3Temp").append(tempDay3Math);
                    // Call for Day 1 temp & the math to convert it from Kelvin to F
                    var tempDay4 = response.list[3].main.temp;
                    var tempDay4Math = (Math.ceil(tempDay4 - 273.15) * 9 / 5 + 32);
                    console.log(tempDay4Math);
                    $("#day4Temp").append(tempDay4Math);
                    // Call for Day 1 temp & the math to convert it from Kelvin to F
                    var tempDay5 = response.list[4].main.temp;
                    var tempDay5Math = (Math.ceil(tempDay5 - 273.15) * 9 / 5 + 32);
                    console.log(tempDay5Math);
                    $("#day5Temp").append(tempDay5Math);

                    // Humidity
                    var humDay1 = response.list[0].main.humidity;
                    $("#day1Hum").append(humDay1);
                    var humDay2 = response.list[1].main.humidity;
                    $("#day2Hum").append(humDay2);
                    var humDay3 = response.list[2].main.humidity;
                    $("#day3Hum").append(humDay3);
                    var humDay4 = response.list[3].main.humidity;
                    $("#day4Hum").append(humDay4);
                    var humDay5 = response.list[4].main.humidity;
                    $("#day5Hum").append(humDay5);


                })

            })

        }
        
        else {
            $("#error").html("Please enter a city");
        }


    });


});