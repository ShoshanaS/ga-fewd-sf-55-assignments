console.log ('good luck human')


//Listen for click on (options li)
//target=event.target.text()
//store informtion
  //what button did the human click?
  //what is the human play?
  //find paragraph and update contents

var humanChoice = $('#options li').click(function () {
    var chosenPlay = event.target;
    var typePlay = $(chosenPlay).text();
    $('#humanchoice').text(typePlay);
  })


// bot plays
// math.random generates a random number between 0 (including) and 1 (excluding)

var botChoice = Math.random();
  
  if (botChoice < 0.333) {
    (botChoice = 'Paper');
    $('#botchoice').text('Rock');
  }
  else if (botChoice > 0.666) {
    (botChoice = 'Paper');
    $('#botchoice').text('Paper');
  }
  else if 
    (botChoice = 'Scissors');
    $('#botchoice').text('Scissors');
  


var compareChoices = function (humanChoice, botChoice) {
  
  if(humanChoice === botChoice) {
    $('#result').text('You tie');
  }
    if(humanChoice === 'rock') {
    if(botChoice === 'Paper')
      $('#result').text('You loose');
      $('#botscore' + 1)
    //else if(botChoice === 'Scissors') 
      $('#result').text('You win');
      $('#humanscore' + 1)
  }
  if(humanChoice === 'scissors') {
    if(botChoice === 'Rock')
      $('#result').text('You loose');
      $('#botscore' + 1)
    ///else if (botchoice === 'paper');
      $('#result').text('You win');
      $('#humanscore' + 1)
  }
  if(humanChoice === 'paper') {
    if(botChoice === 'Rock')
      $('#result').text('You win');
      $('#humanscore' + 1)
    //else if (botchoice === 'Scissors') 
      $('#result').text('You loose');
      $('#botscore' + 1)
  }
}




// var currentYear = 2017;
// var name = prompt('What is your name?');
// var yob = prompt('What year where you born in?');
// var age = currentYear - yob;
// var salutation = ('Hello ' + name)

// $('#greeting').text(name);

// if (age >= 25) {
//   $('#result').text('Happy Rental!');
// }
// else if (age < 25 && age >= 21) {
//   $('#result').text('Pay Up');
// }
// else {
//   $('#result').text('Take the bus.');
// }