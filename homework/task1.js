function fillListItems() {
	let elements = document.querySelectorAll("li");

	for (let i = 0; i < elements.length; i++) {
		elements[i].innerHTML = "какой-то текст " + (i + 1);
	}

	let numberOfItems = elements.length;
	console.log("Было заполнено " + numberOfItems + " элементов списка!");
}