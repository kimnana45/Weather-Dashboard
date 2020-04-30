var cityList = [];
//use localstorage to store and get data on click  
function displayWeather(){
    var city = $(this).attr('data-name');

    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=07c55abb142d07d64c38ec8a22379edc&units=imperial"
    $.ajax({
        url : queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        console.log(queryURL);
        var currentWeatherDiv = $('#currentWeather');
        currentWeatherDiv.empty();
        // $('#currentWeather').text(JSON.stringify(response));
        var cityName = response.name
        console.log(cityName)
        var t1 = $('<h4>').text(cityName);
        currentWeatherDiv.append(t1);
        var date = $('<h4>').text(moment().format("MM/DD/YYYY"));
        console.log(date);
        currentWeatherDiv.append(date);
        var icon = "http://openweathermap.org/img/wn/"+response.weather[0].icon+".png"
        console.log(icon);
        currentWeatherDiv.append(icon);
        var temp = response.main.temp;
        console.log(temp);
        var t2 = $('<p>').text("Temperature: " + temp+"°F")
        currentWeatherDiv.append(t2);
        var humidity =response.main.humidity
        console.log(humidity)
        var t3 = $('<p>').text('Humidity: '+ humidity+'%');
        currentWeatherDiv.append(t3);
        var windspeed = response.wind.speed
        console.log(windspeed)
        var t4 = $('<p>').text('Windspeed: '+ windspeed+'MPH');
        
    })
    var queryURL2 ="http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=07c55abb142d07d64c38ec8a22379edc&units=imperial"
    $.ajax({
        url : queryURL2,
        method: 'GET'
    }).then(function(response2) {   
        console.log(response2);
        console.log(queryURL2);
        var forecastDiv = $('#5dayForecast');
        forecastDiv.empty();
        for (i = 0; i < response2.list.length; i++){
            // if ()
            var Objdate = toLocaleDateString(response2.list[i].dt_txt);
            console.log(Objdate);  
            
        }
    }); 
} 
function generateList() {
    $('#city-list').empty();
    for (var i = 0; i < cityList.length; i++){
        var c  = $('<li>');
        c.addClass('city');
        c.attr('data-name', cityList[i])
        c.text(cityList[i]);
        $('#city-list').append(c);
    }
}
$('#searchBtn').on('click', function(event){
    event.preventDefault();
    var city = $('#cityInput').val();
    console.log(city);
    cityList.push(city);

generateList();
});
$(document).on('click', '.city', displayWeather);
generateList();
    
    
// addCity();
// console.log(response);
// console.log(queryURL);