
var currentYear = 2017;
var name = prompt('What is your name?');
var yob = prompt('What year where you born in?');
var age = currentYear - yob;
var salutation = ('Hello ' + name)

$('#greeting').text(name);

if (age >= 25) {
  $('#result').text('Happy Rental.');
}
else if (age < 25 && age >= 21) {
  $('#result').text('Pay Up.');
}
else {
  $('#result').text('Take the bus.');
}