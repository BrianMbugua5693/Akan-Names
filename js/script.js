
var submission = function() {
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  var maleNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame"
  ];
  var femaleNames = [
    "Akosua",
    " Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama"
  ];
  var month = parseInt(document.getElementById("month").value);
  var year = parseInt(document.getElementById("year").value);
  var day = parseInt(document.getElementById("day").value);
  var name =(document.getElementById("name").value);
  var date0fbirth = new Date(year + "/" + month + "/" + day);
  var results = date0fbirth.getDay();
  var output = document.getElementById("output");
  var male = document.getElementById("male")
  var female = document.getElementById("female")
  if (day < 1 && day > 31 ) {
      output.style.background ="red"
      output.style.color= "white"
      output.innerHTML = "Hey! " + name + " please enter a valid day!(1-31) "
  }
 else if (month < 1 && month > 12 ) {
    output.style.background ="red"
    output.style.color= "white"
    output.innerHTML = "Hey! " + name + " please enter a valid month!(1-12) "
}
 else if (year < 1900) {
    output.style.background ="red"
    output.style.color= "white"
    output.innerHTML = "Hey! " + name + " please enter a valid year "
}
 
  else if(male.checked) {
      output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + maleNames[results];
  }
   else {
    output.innerHTML = "Hey! " + name + " you were born on a " + daysOfTheWeek[results] + " and your Akan name is " + femaleNames[results];
}
};
