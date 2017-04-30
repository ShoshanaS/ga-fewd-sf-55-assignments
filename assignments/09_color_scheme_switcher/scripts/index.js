alert('hello world');

function DarkBackground() {
  $('.body').click('body.black');
}

function LightBackground() {
  $('#whiteButton').show('.body');
}

$('#grayButton').click(DarkBackground);
$('#whiteButton').click(LightBackground);