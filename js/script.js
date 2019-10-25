
var daysOfTheWeek = ["Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday"]
var MaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var FemaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var month = parseInt(document.getElementById("month").value)
var year = parseInt(document.getElementById("year").value)
var day = parseInt(document.getElementById("day").value)
var century = parseInt(document.getElementById("century").value)
var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;