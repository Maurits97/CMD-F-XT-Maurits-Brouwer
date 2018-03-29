var map;
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
	}