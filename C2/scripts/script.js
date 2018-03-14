function timer() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var year = date.getFullYear();
	var day = date.getUTCDate();
	
	var month = new Array();
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
	var newMonth = month[date.getMonth()];
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	} else if (hours < 10) {
		hours = "0" + hours;
	} else if (seconds < 10) {
		seconds = "0" + seconds;
	}
	
	var time = hours + ":" + minutes + ":" + seconds;
	document.getElementById("time").innerHTML = time;
	document.getElementById("date").innerHTML = day + " " + newMonth +" " + year;

	if (hours > 6 && hours < 12) {
		document.getElementById("title").innerHTML = "Good morning,";
		document.getElementById("img1").style.display = "block";
	} else if (hours > 12 && hours < 14) {
		document.getElementById("title").innerHTML = "Good afternoon,";
		document.getElementById("img2").style.display = "block";
	} else if (hours > 18 && hours < 20) {
		document.getElementById("title").innerHTML = "Good evening,";
		document.getElementById("img3").style.display = "block";
	} else if (hours > 23 && hours < 6) {
		document.getElementById("title").innerHTML = "Good night,";
		document.getElementById("img4").style.display = "block";
	} else{
		document.getElementById("title").innerHTML = "Good day,";
		document.getElementById("img0").style.display = "block";
	}


}

setInterval(timer, 100);

var dayCycle = document.getElementById('cycle');
TweenLite.defaultEase = Linear.easeNone;

var timeline = new TimelineMax({ repeat: -1});
	timeline.to(dayCycle, 100, {
		rotation: 360});



