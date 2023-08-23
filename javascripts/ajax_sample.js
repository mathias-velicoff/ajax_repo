let number = 0;
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById("btn");
let data = [];

function changeVideo() {
	button.addEventListener("click", (e) => {
		titleArea.innerHTML = data[number].title;
		contentArea.innerHTML = data[number].content;
		videoArea.setAttribute("src", data[number].url);
		number == 2 ? (number = 0) : number++;
	});
}

function getData() {
	const request = new XMLHttpRequest();
	request.onreadystatechange = function () {
		if (request.readyState == 4 && request.status == 200) {
			data = JSON.parse(request.responseText);
			changeVideo();
		}
	};
	request.open("GET", "ajax.json", true);
	request.send();
}

window.onload = getData;
