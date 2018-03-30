var map;
var temp;
var windSpeed;
function initMap() {

	var airportIcon = {
		  url: 'img/airport.svg',
		  scaledSize: new google.maps.Size(50, 50)
	};
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 52.266329,  lng: 5.156905},
    zoom: 8,
    styles: stylesArray
  });
  var schiphol = new google.maps.Marker({
    position: {lat: 52.311481, lng: 4.766752},
  	map: map,
  	icon: airportIcon
  });
  var rotterdam = new google.maps.Marker({
  	position: {lat: 51.955271, lng: 4.439765},
  	map: map,
  	icon: airportIcon
  });
  var eindhoven = new google.maps.Marker({
 	  position: {lat: 51.458264, lng: 5.389123},
  	map: map,
  	icon: airportIcon
  });
  var groningen = new google.maps.Marker({
  	position: {lat: 53.125665, lng:  6.577628},
  	map: map,
  	icon: airportIcon
  });

  getAPIdataWeather();

  var contentString = '<div class="markerContent">Landingplatform: Schiphol Airport' + '<br />' +
                      'Height: 10000m' + '<br />' +
                      'Temperature: ' + temp + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed + ' km/h'+ '<br />'
                      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
      });

  schiphol.addListener('click', function() {
          infowindow.open(map, schiphol);
        });
}

function getAPIdata() {
  // get latest weather
  fetch('https://rickandmortyapi.com/api/character/')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  // render weather per day
  .then(function(response) {
    // show full JSON object
    console.log(response.results);
    var characterArray = response.results;
    var random = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById("RM").src = random.image;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=52.311481&lon=4.766752&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // show full JSON object
    console.log(response);
    windSpeed = response.wind.speed;
    temp = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}


getAPIdata();
getAPIdataWeather();


