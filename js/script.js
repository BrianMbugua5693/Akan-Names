var century,year,month,dayOfMonth
var year = parseInt(document.getElementById("year").value);
var month = parseInt(document.getElementById("month").value);
var dayOfMonth = parseInt(document.getElementById("day").value);
dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7);
dayOfWeek = ((((century / 4) - 2 * century - 1) + ((5 * year / 4)) + ((26 * (month + 1) / 10)) + dayOfMonth) % 7)-1;
return Math.floor(dayOfWeek);

