'use strict';
//User 1 input of rock,paper or scissors//
//User 2 input of rock, paper or scissors//
//Compare user 1 input to user 2 input//
//if user 1 input is 'rock' and user 2 input is 'scissor',user1 wins//
//if user 1 input is 'rock' and user 2 input is 'paper', user 2 wins//
//if user 1 input is 'rock' and user 2 input is 'rock' it's a tie//
//if user 1 input is 'paper' and user 2 input is 'scissors',user 2 wins.//
//if user 1 input is 'paper' and user 2 input is 'rock', user 1 wins//
//if user 1 input is'paper' and user 2 input is 'paper', its a tie.//
//if user 1 input is'scissors' and user 2 input is 'rock', user 2 wins//
//if user 1 input is 'scissors' and user 2 input is 'scissors', its a tie//
const R = "Rock";
const P = "Paper";
const S = "Scissors";
const hand1 = "player1";
const hand2 = "player2";


const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function rockPaperScissors(hand1, hand2)

if (hand1.assert) {
  text = "The Game Begins"
}
} else {
  {
    text = "Start with Player 1"
  }

}

function getPrompt() {
  rl.question('hand1:', (R) => {
      text = "Rock Beats Scissors"
    }
    rl.question('hand2:', (S) => {
        text = "I lose this hand"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(text = "Hand1 wins");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (R) => {
      text = "Paper covers Rock"
    }
    rl.question('hand2:', (P) => {
        text = "I win this hand"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(text = "Hand2 wins");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (R) => {
      assert.equal(rock, rock)
      "Its a tie"
    }
    rl.question('hand2:', (R) => {
        assert.equal(rock, rock)
        "Its a tie"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(assert.equal(rock, rock)
        "Its a tie"));
  });
});
}

function getPrompt() {
  rl.question('hand1:', (P) => {
      text = "I lose"
    }
    rl.question('hand2:', (S) => {
        text = "I win"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(text = "hand 2 wins");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (P) => {
      text = "I lose"
    }
    rl.question('hand2:', (R) => {
        text = "I win"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(text = "hand 2 wins");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (P) => {
      assert.equal(paper, paper)
      "Its a tie"
    }
    rl.question('hand2:', (P) => {
        assert.equal(paper, paper)
        "Its a tie"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(assert.equal(paper, paper)
        "Its a tie");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (S) => {
      text = "I lose"
    }
    rl.question('hand2:', (R) => {
        text = "I win"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(text = "hand2 wins");
    });
});
}

function getPrompt() {
  rl.question('hand1:', (S) => {
      assert.equal(scissors, scissors)
      "Its a tie"
    }
    rl.question('hand2:', (S) => {
        assert.equal(scissors, scissors)
        "Its a tie"
      }
      console.log(rockPaperScissors(answer1, answer2)); getPrompt(assert.equal(scissors, scissors)
        "Its a tie"));
  });
});
//Tests//
if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}