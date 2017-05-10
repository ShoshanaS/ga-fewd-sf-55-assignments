//function generateChoc() {
  //$('#yourflavor').text('chocolate');
//}

//function generateRasp() {
  //$('#yourflavor').text('raspberry');
//}

//function generateStraw() {
  //$('#yourflavor').text('strawberry');
//}

//function generateMystery() {
  //$('#yourflavor').text('mystery');
//}

// function TwoScoops() {
//   $('#numberofscoops').text('2' + ' scoops ');
// }

// function ThreeScoops() {
//   $('#numberofscoops').text('3' + ' scoops ');
// }

// function FourScoops() {
//   $('#numberofscoops').text('4' + ' scoops ');
// }

//$('#chocolate').click(generateChoc);
//$('#raspberry').click(generateRasp);
//$('#strawberry').click(generateStraw);
//$('#mystery').click(generateMystery);

// $('#two').click(TwoScoop s);
// $('#three').click(ThreeScoops);
// $('#four').click(FourScoops);


function setNumScoops() {
  // What scoop choice was clicked?
  var chosenScoop = event.target;
  // What is the scoop amount?
  var numScoops = $(chosenScoop).text();

  // Find scoop holder element and update its contents
  $('#numberofscoops').text(numScoops + ' scoops ');
}

$('#scoops li').click(setNumScoops);

function setFlavor() {
  var chosenFlavor = event.target;
  var typeFlavor = $(chosenFlavor).text();
  $('#yourflavor').text(chosenFlavor);
}

$('#flavor li').click(setFlavor);






