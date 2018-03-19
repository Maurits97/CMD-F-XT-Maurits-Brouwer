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
	var img0 = document.getElementById("img0");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2");
	var img3 = document.getElementById("img3");
	var img4 = document.getElementById("img4");


	if (hours > 5 && hours < 12) { //Different time variables
		title.innerHTML = "Good morning,";
		img0.style.display = "none";
		img1.style.display = "block";
		img2.style.display = "none";
		img3.style.display = "none";
		img4.style.display = "none";
		part.innerHTML = "time for breakfast";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours >= 12 && hours <= 14) {
		title.innerHTML = "Good afternoon,";
		img0.style.display = "none";
		img1.style.display = "none";
		img2.style.display = "block";
		img3.style.display = "none";
		img4.style.display = "none";
		part.innerHTML = "time to lunch";
		part.style.display = "block";
		its.style.display = "inline";

	} else if(hours > 14 && hours < 18){
		img0.style.display = "block";
		img1.style.display = "none";
		img2.style.display = "none";
		img3.style.display = "none";
		img4.style.display = "none";
		title.innerHTML = "Good afternoon,";
		part.style.display = "none";
		its.style.display = "none";

	} else if (hours >= 18 && hours < 20) {
		img0.style.display = "none";
		img1.style.display = "none";
		img2.style.display = "none";
		img3.style.display = "block";
		img4.style.display = "none";
		part.innerHTML = "time for dinner";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours >= 20 && hours < 23){
		img0.style.display = "block";
		img1.style.display = "none";
		img2.style.display = "none";
		img3.style.display = "none";
		img4.style.display = "none";
		title.innerHTML = "Good evening,";
		part.style.display = "none";
		its.style.display = "none";

	} else if (hours >= 23 || hours <= 1) {
		img0.style.display = "none";
		img1.style.display = "none";
		img2.style.display = "none";
		img3.style.display = "none";
		img4.style.display = "block";
		title.innerHTML = "Good night,";
		part.innerHTML = "time to sleep";
		part.style.display = "block";
		its.style.display = "inline";

	} else if (hours > 1 && hours <= 5){
		title.innerHTML = "Good night,";
		img0.style.display = "block";
		img1.style.display = "none";
		img2.style.display = "none";
		img3.style.display = "none";
		img4.style.display = "none";
		part.innerHTML = "time to sleep";
		part.style.display = "block";
		its.style.display = "inline";
	}

	if (hours >= 6 && hours <= 18) { //Sun or moon
		document.getElementById("sun").style.display = "block";
		document.getElementById("moon").style.display =  "none";
	} else {
		document.getElementById("moon").style.display =  "block";
		document.getElementById("sun").style.display =  "none";
	}
}

setInterval(timer, 100);

var dayCycle = document.getElementById('cycle');
var sun = document.getElementById('sun');
var moon = document.getElementById('moon');
var mars = document.getElementById('mars');

TweenLite.defaultEase = Linear.easeNone;


var tl2 = new TimelineMax({ repeat: -1});
	tl2.to(sun, 300, {
		rotation: 360});

var tl3 = new TimelineMax({ repeat: -1});
	tl3.to(moon, 300, {
		rotation: 360});
	
var tl5 = new TimelineMax({repeat: -1});
	tl5.to(mars, 50, {
		transform: "translate3d(0, 80vh, 0)"});

	tl5.to(mars, 50, {
		rotation: -360 },'-=50');

	tl5.to(mars, 50, {
		transform: "translate3d(0, 0vh, 0)"});





