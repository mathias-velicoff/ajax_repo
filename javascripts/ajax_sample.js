function getData() {
	const request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) {
				document.getElementById("title").innerHTML = request.response[0].title; //--modificación
			}
		}
	};
	request.open("GET", "ajax.json");
	request.responseType = "json";
	request.send(null);
}

window.onload = getData;
