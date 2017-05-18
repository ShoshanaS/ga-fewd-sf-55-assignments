console.log ('good luck human')

// Psuedo code from class \\
    // only execute code when DOM is ready
    //Listen for user click on (options li)
        //target=event.target.text()
    //get the value of the user play
    //computer plays randomly
    //compare user play with bot play
    //if there is a winner
      //update scoreboard
      //log details of play

// Order of approach from class \\
    // 1. Implement click listeners to figure out user play. Think of verbs to name the function! And set intial variables.
    // 2. hard code computer play (i.e. manually define random play)
    // 3. Implement game logic
    // 4. console.log the result
    // 5. update the play status and scoreboard
    // 6. Implement random computer play


  var humanScore = 0;
  var botScore = 0;

  var botPlayRandomizer = function () {
    var randomBotPlay = Math.floor(Math.random()*3+1);
    if (randomBotPlay === 1) { 
      botPlay = 'rock';
      console.log('botPlay: ' + botPlay);
    } else if (randomBotPlay === 2) {
      botPlay = 'paper';
      console.log('botPlay: ' + botPlay);
    } else {
      botPlay = 'scissors';
      console.log('botPlay: ' + botPlay);
    }
  }

  var scoreKeeper = function (winner, userPlay, botPlay) {

    // define result from human point of view
    if (winner === 'human') {
      result = 'win';
      // add to human score in scoreboard in increments 
      humanScore = humanScore + 1;
    } else if (winner === 'bot') {
      result = 'lose';
      // add to human score in scoreboard in increments
      botScore = botScore + 1;
    } else {
      result = 'tie';
    }

    // update the result id tag
    $('#result').text('User played ' + userPlay + ' and bot played ' + botPlay + '. You ' + result + '!');
    
    //update the scoreboard
    $('#humanscore').text(humanScore);
    $('#botscore').text(botScore);
  }
  


  $('#options li').click(function () {
    var chosenPlay = event.target;
    var userPlay = $(chosenPlay).text().toLowerCase();
    console.log('userPlay: ' + userPlay);

    //Execute randomizer of botPlay
    botPlayRandomizer()

    switch (userPlay) {
      case botPlay:
        console.log('its a tie');
        scoreKeeper('tie', userPlay, botPlay)
        break;
      case 'rock':
        if (botPlay === 'paper') {
          console.log('You loose!');
          scoreKeeper('bot', userPlay, botPlay);
        } else {
          // Bot plays scissors
          console.log('You win!');
          scoreKeeper('human', userPlay, botPlay);
        }
        break;
      case 'paper':
        if (botPlay === 'rock') {
          console.log('You win!');
          scoreKeeper('human', userPlay, botPlay);
        } else {
          // Bot plays scissors
          console.log('You loose!');
          scoreKeeper('bot', userPlay, botPlay);
        }
        break;
      case 'scissors':
        if (botPlay === 'rock') {
          console.log('You loose!');
          scoreKeeper('bot', userPlay, botPlay);
        } else {
          // Bot plays paper
          console.log('You win!');
          scoreKeeper('human', userPlay, botPlay);
        }
        break;
      }
  });


// Code from Home \\

// bot plays
// math.random generates a random number between 0 (including) and 1 (excluding)

// var botChoice = Math.random();
  
//   if (botChoice < 0.333) {
//     (botChoice = 'Paper');
//     $('#botchoice').text('Rock');
//   }
//   else if (botChoice > 0.666) {
//     (botChoice = 'Paper');
//     $('#botchoice').text('Paper');
//   }
//   else if 
//     (botChoice = 'Scissors');
//     $('#botchoice').text('Scissors');
  


// var compareChoices = function (humanChoice, botChoice) {
  
//   if(humanChoice === botChoice) {
//     $('#result').text('You tie');
//   }
//     if(humanChoice === 'rock') {
//     if(botChoice === 'Paper')
//       $('#result').text('You loose');
//       $('#botscore' + 1)
//     //else if(botChoice === 'Scissors') 
//       $('#result').text('You win');
//       $('#humanscore' + 1)
//   }
//   if(humanChoice === 'scissors') {
//     if(botChoice === 'Rock')
//       $('#result').text('You loose');
//       $('#botscore' + 1)
//     ///else if (botchoice === 'paper');
//       $('#result').text('You win');
//       $('#humanscore' + 1)
//   }
//   if(humanChoice === 'paper') {
//     if(botChoice === 'Rock')
//       $('#result').text('You win');
//       $('#humanscore' + 1)
//     //else if (botchoice === 'Scissors') 
//       $('#result').text('You loose');
//       $('#botscore' + 1)
//   }
// }