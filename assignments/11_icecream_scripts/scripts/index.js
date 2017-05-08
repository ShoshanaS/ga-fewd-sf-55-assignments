function generateChoc() {
  $('#yourflavor').text('chocolate');
}

function generateRasp() {
  $('#yourflavor').text('raspberry');
}

function generateStraw() {
  $('#yourflavor').text('strawberry');
}

function generateMystery() {
  $('#yourflavor').text('mystery');
}

function TwoScoops() {
  $('#numberofscoops').text('2' + ' scoops ');
}

function ThreeScoops() {
  $('#numberofscoops').text('3' + ' scoops ');
}

function FourScoops() {
  $('#numberofscoops').text('4' + ' scoops ');
}

$('#chocolate').click(generateChoc);
$('#raspberry').click(generateRasp);
$('#strawberry').click(generateStraw);
$('#mystery').click(generateMystery);

$('#two').click(TwoScoops);
$('#three').click(ThreeScoops);
$('#four').click(FourScoops);





