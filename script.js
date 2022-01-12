const APIKey = '9081e9ae01bf177bb71debf49f8e6ef2'

function weatherSearch(cityName) {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName +  '&appid=' + APIKey;
fetch (requestUrl)
    .then (function (response){
        return response.json();
    })
    .then (function(data){
        console.log(data)
    });
    
}

