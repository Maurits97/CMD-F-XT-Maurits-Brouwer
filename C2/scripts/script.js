function timer() {
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	
	if (hours < 10) {
		hours = "0" + hours;
	}
	
	var time = hours + ":" + minutes;
	document.getElementById("uur").innerHTML = time;

	var ampm = document.getElementById("ampm");
	if (hours >= 12) {
		ampm.innerHTML = "Pm";
		ampm.style.color = "#1fbfe2";
	} else {
		ampm.innerHTML = "Am";
		ampm.style.color = "#f7b336";
	}

	if (hours > 12 && hours < 14) {
		document.getElementById("colorone").style.backgroundColor = "green";
	} else {
		document.getElementById("colorone").style.backgroundColor = "white";
	}
}

setInterval(timer, 100);



