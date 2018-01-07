function clickOnButton() {
	var num = +prompt("Enter you numer","")

	if (isNaN(num)) {
		alert("Введи число!")
	} else {
		alert("Вы ввели: " + num)
	}
}