function getData() {
	const request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4) {
			if (request.status == 200) {
				document.getElementById("title").innerHTML = request.response[0].title;
			}
		}
	};
	request.open("GET", "ajax.json"); // --1
	request.responseType = "text"; // --2
	request.send(null);
}
