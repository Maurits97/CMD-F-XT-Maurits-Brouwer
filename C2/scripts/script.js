function timer() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var year = date.getFullYear();
	var day = date.getUTCDate();
	
	if (hours < 10) {
		hours = "0" + hours;
	} 
	if (minutes < 10) {
		minutes = "0" + minutes;
	} 
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
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

	var time = hours + ":" + minutes + ":" + seconds;

	document.getElementById("time").innerHTML = time;
	document.getElementById("date").innerHTML = day + " " + newMonth +" " + year;

	var title = document.getElementById("title");
	var part = document.getElementById("part");
	var its = document.getElementById("its");


	if (hours > 5 && hours < 12) {
		title.innerHTML = "Good morning,";
		document.getElementById("img1").style.display = "block";
		document.getElementById("img0").style.display = "none";
		part.innerHTML = "time for breakfast";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours >= 12 && hours <= 14) {
		title.innerHTML = "Good afternoon,";
		document.getElementById("img2").style.display = "block";
		document.getElementById("img1").style.display = "none";
		part.innerHTML = "time to lunch";
		part.style.display = "block";
		its.style.display = "inline";

	} else if(hours > 14 && hours < 18){
		document.getElementById("img0").style.display = "block";
		document.getElementById("img2").style.display = "none";
		title.innerHTML = "Good afternoon,";
		part.style.display = "none";
		its.style.display = "none";

	} else if (hours >= 18 && hours < 20) {
		document.getElementById("img3").style.display = "block";
		document.getElementById("img0").style.display = "none";
		part.innerHTML = "time for dinner";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours >= 20 && hours < 23){
		document.getElementById("img0").style.display = "block";
		document.getElementById("img3").style.display = "none";
		title.innerHTML = "Good evening,";
		part.style.display = "none";
		its.style.display = "none";

	}else if (hours >= 23 || hours <= 1) {
		title.innerHTML = "Good night,";
		document.getElementById("img4").style.display = "block";
		document.getElementById("img0").style.display = "none";
		part.innerHTML = "time to sleep";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours > 1 && hours <= 5){
		title.innerHTML = "Good night,";
		document.getElementById("img0").style.display = "block";
		document.getElementById("img4").style.display = "none";
		part.innerHTML = "time to sleep";
		part.style.display = "block";
		its.style.display = "inline";
	}
}

setInterval(timer, 100);

var dayCycle = document.getElementById('cycle');
TweenLite.defaultEase = Linear.easeNone;

var timeline = new TimelineMax({ repeat: -1});
	timeline.to(dayCycle, 100, {
		rotation: 360});

// idee om zon daadwerkelijk te laten draaien. daylight cycle. 
// Zon 6:00 - 18:00, maan 18:00 - 6:00


