var map;
var temp;
var windSpeed;
var temp2;
var windSpeed2;
var temp3;
var windSpeed3;
var temp4;
var windSpeed4;
var temp5;
var windSpeed5;
var temp6;
var windSpeed6;

function initMap() {

	var airportIcon = {
		  url: 'img/airport.svg',
		  scaledSize: new google.maps.Size(50, 50)
	};
  var waterIcon = {
      url: 'img/water.png',
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
  	position: {lat: 53.125665, lng: 6.577628},
  	map: map,
  	icon: airportIcon
  });
  var aalsmeer = new google.maps.Marker({
    position: {lat: 52.247389, lng: 4.728658},
    map: map,
    icon: waterIcon
  });
  var loosdrecht = new google.maps.Marker({
    position: {lat: 52.192602, lng: 5.064446},
    map: map,
    icon: waterIcon
  });

  getAPIdataWeather();
  getAPIdataWeather2();
  getAPIdataWeather3();
  getAPIdataWeather4();
  getAPIdataWeather5();
  getAPIdataWeather6();



  var contentSchiphol = '<div class="markerContent">Landingplatform: Schiphol Airport' + '<br />' +
                      'Sea level: -3 m' + '<br />' +
                      'Temperature: ' + temp + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed + ' km/h'+ '<br />'
                      '</div>';
  var contentRotterdam = '<div class="markerContent">Landingplatform: Rotterdam The Hague Airport' + '<br />' +
                      'Sea level: -4 m' + '<br />' +
                      'Temperature: ' + temp2 + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed2 + ' km/h'+ '<br />'
                      '</div>';
  var contentEindhoven = '<div class="markerContent">Landingplatform: Eindhoven Airport' + '<br />' +
                      'Sea level: 20 m' + '<br />' +
                      'Temperature: ' + temp3 + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed3 + ' km/h'+ '<br />'
                      '</div>';
  var contentGroningen = '<div class="markerContent">Landingplatform: Groningen Airport Eelde' + '<br />' +
                      'Sea level: 3 m' + '<br />' +
                      'Temperature: ' + temp4 + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed4 + ' km/h'+ '<br />'
                      '</div>';
  var contentAalsmeer = '<div class="markerContent">Landingplatform: Aalsmeer' + '<br />' +
                      'Sea level: -3.66 m' + '<br />' +
                      'Temperature: ' + temp5 + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed5 + ' km/h'+ '<br />'
                      '</div>';
  var contentLoosdrecht = '<div class="markerContent">Landingplatform: Loosdrecht' + '<br />' +
                      'Sea level: 1.86 m' + '<br />' +
                      'Temperature: ' + temp6 + ' degrees' +'<br />' +
                      'Windspeed: '+ windSpeed6 + ' km/h'+ '<br />'
                      '</div>';                          

  var infoSchiphol = new google.maps.InfoWindow({
      content: contentSchiphol
      });
  var infoRotterdam = new google.maps.InfoWindow({
      content: contentRotterdam
      });
  var infoEindhoven = new google.maps.InfoWindow({
      content: contentEindhoven
      });
  var infoGroningen = new google.maps.InfoWindow({
      content: contentGroningen
      });
  var infoAalsmeer = new google.maps.InfoWindow({
      content: contentAalsmeer
      });
  var infoLoosdrecht = new google.maps.InfoWindow({
      content: contentLoosdrecht
      });

  schiphol.addListener('click', function() {
          infoSchiphol.open(map, schiphol);
        });
  rotterdam.addListener('click', function() {
          infoRotterdam.open(map, rotterdam);
        });
  eindhoven.addListener('click', function() {
          infoEindhoven.open(map, eindhoven);
        });
  groningen.addListener('click', function() {
          infoGroningen.open(map, groningen);
        });
  aalsmeer.addListener('click', function() {
          infoAalsmeer.open(map, aalsmeer);
        });
  loosdrecht.addListener('click', function() {
          infoLoosdrecht.open(map, loosdrecht);
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
    var characterArray = response.results;
    var random = characterArray[Math.floor(Math.random() * characterArray.length)];
    document.getElementById("RM").src = random.image;
    document.querySelector("link[rel*='icon']").href = random.image;
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
    windSpeed = response.wind.speed;
    temp = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather2() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=51.955271&lon=4.439765&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // show full JSON object
    windSpeed2 = response.wind.speed;
    temp2 = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather3() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=51.458264&lon=5.389123&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // show full JSON object
    windSpeed3 = response.wind.speed;
    temp3 = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather4() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=53.125665&lon=6.577628&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // show full JSON object
    windSpeed4 = response.wind.speed;
    temp4 = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather5() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=52.247389&lon=4.728658&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  // render weather per day
  .then(function(response) {
    // show full JSON object
    windSpeed5 = response.wind.speed;
    temp5 = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}
function getAPIdataWeather6() {
  // get latest weather
  fetch('http://api.openweathermap.org/data/2.5/weather?lat=52.192602&lon=5.064446&units=metric&APPID=612d97da4d3eabf8ec876d11c5cd608c')
  // parse to JSON format 52.192602, lng: 5.064446
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    // show full JSON object
    windSpeed6 = response.wind.speed;
    temp6 = response.main.temp;
  })
  // catch error
  .catch(function (error) {
    console.error('Request failed', error);
  });
}

getAPIdata();
getAPIdataWeather();
getAPIdataWeather2();
getAPIdataWeather3();
getAPIdataWeather4();
getAPIdataWeather5();
getAPIdataWeather6();

