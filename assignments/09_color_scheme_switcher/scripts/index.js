// function DarkBackground() {
//  $('body').css('background-color', '#474747');
//  $('body').css('color', 'white');
//}

// function LightBackground() {
//  $('body').css('background-color', '#e8e8e8');
//  $('body').css('color', 'black');
//}

// $('#grayButton').click(DarkBackground);
// $('#whiteButton').click(LightBackground);


function DarkBackground() {
  $('body').addClass('black');
}

function LightBackground() {
  $('body').removeClass('black');
}

$('#grayButton').click(DarkBackground);
$('#whiteButton').click(LightBackground);
