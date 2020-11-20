function startTime() {
	let today = new Date();
	let h = today.getHours();
	let m = today.getMinutes();
		m = checkTime(m);
	let s = today.getSeconds();
		s = checkTime(s);

	let t = setTimeout(startTime, 500);

		document.getElementById("currentDate").innerHTML = today.getDate() + "-" + (today.getMonth()+1) + "-" + today.getFullYear();
		document.getElementById("currentTime").innerHTML = h + ":" + m + ":" + s;
}

function checkTime(i) {
	if (i < 10) {i = "0" + i};
	return i;
}