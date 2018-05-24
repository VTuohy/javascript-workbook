'use strict'
/* define columns by arrays[of strings] the strings which are local variables because they change order/*
/*build a function that monitor's the state of these array  strings/*... maybe a readline.
/* correct order of blocks being a-yellow,b-red,c-green,n-blue... use const= hanoi and these blocks are global variables/*
// remember the array is a zero index in javascript and in 'strict' mode global variables will not be automatically created//
/* each column should be an array and we should be able to search through it with a 'for/each loop'*/
/* the 'for/each loop' should be used because it takes first argument as a callback*/

/*begin the game with an onclick attribute(with code targeting the element id), and add to a button element*/
/* once block is clicked it will disappear and reappear upon clicking a second time */
/*create a readline.Interface so that it will listen for the 'line' event when pieces of the string are moved.
/* write a function that allows blocks to move from first to second column or second to first column in an order[n,c,b,a] or [a,b,c,n]/*
//test to make sure this works//
 /* Write a function that only allows First or Second column to move to third column by[a,b,c,n] ...largest size FIRST to smallest size LAST*/
//Write an alert for 3rd column if it is not in that[a,b,c,n] sequential  order// function assert {if !(condition){throw message ll "no";})}

//test to prove this is not a move user can make/

/* when third column is in same order as (initial) game starting block order(a,b,c,n) And first two columns[arrays] are ...empty declare a win with an alert and reset game function */
//write a test function to test win//
/*test cases(1)no blocks can even enter third column unless in sequential order of (a,b,c,n).*/
/* (2) First and Second columns[arrays] work in sequences of [a,b,c,n] and [n,b,c,a] between eachother but do not have to have all pieces of string to stick.
//make arrays of strings//



const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // Your code here

}

function isLegal() {
  // Your code here

}

function checkForWin() {
  // Your code here

}

function towersOfHanoi(startStack, endStack) {
  // Your code here

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}