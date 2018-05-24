'use strict'
//Create a for loop to console.log each item in the array carsInReverse//
const carsInReverse = ['Honda', 'Audi', 'Porsch', 'Chevy', 'Mazda', 'BMW', 'Toyota', 'Ford'];
const i = 0;
const len = carsInReverse.length;
for (; i < len;) {
  console.log(carsInReverse.len);
}
//For...In loop... Create an object (an array with keys and values) called persons with the following data:
//firstName:"Jane",lastName:"Doe",birthDate:"Jan 5,1925"//
//Use a for loop to console.log each key//
const persons = {
  fname: "Jane",
  lname: "Doe",
  bdate: "Jan 5, 1925",
  gender: "female"
}
const arr = [];
const len = persons.length;
for (let i = 0, i < length; i++) {
  (console.log(persons.len));
}
//Use a for loop to console.log each key//
for (persons)
  //Then use a for...in loop and if state to console.log the value associated with the key birthdate//
  for (persons.len) {
    console.log(persons.bdate));
}
//for in...//
const text = " ";
const x;
for (x in persons) {
  text += persons[x];
}
//Use a for loop to console.log the numbers 1 to 1000//
for (x = 1; x <= 1000; x++) {
  console.log(x);
}

//do...while loop... Use a do...while loop to console.log the numbers from 1 to 1000//
const i = 0
do {
  i += 1 console.log(i)
}
while (i < 1000);
/*When is a for loop better than a while loop? It is better when you want to initiate many values and also if you want to omit a statement.*/
//How is the readibility affected?//

/*What is the difference between a for loop and a for... in loop?  The difference is  the for... in when used to iterate over an array will return the name of the user defined property in addition to numeric indexes. A for loop will return a numerical index.*/

/*What is the difference between a while loop and a do... while loop?  A while loop executes its statements as long as a specified condition evaluates to true.  A do while will always be executed at least once, even if the condition is false because the code is executed before the condition is tested.*/