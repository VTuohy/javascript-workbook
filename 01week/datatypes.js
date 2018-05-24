1. // Write a JavaScript program to display the current day and time//



const getTimeStamp = new Date();

getTimeStamp;


2. // Write a JavaScript program to convert a number to a string.//

/* we will use a method to convert a
const to a string
we will name a
const num and give it a value
call another
const n and have it = num.toString();
the
const n will be returned as a string */

const num = 15;
const n = num.toString();

n = 15;

3. // Write a JavaScript program to convert a string to the Number//


/*function by starting with a variable of num1 = true
call another variable of n = Number(num1)
this will
return 1, as the argument num1 has been given its numerical value */

const num1 = true;
const n = Number(num1);

n = 1;

4. /*Write a JavaScript program that takes in different datatypes and prints out whether they are a: Boolean - Null - Undefined - Number - NaN - String */

//function that asks what datatype youve inputed//

/*function is a series of
  if
else functions
goes through each to validate what it is and is not
prints what type of datatype it is */

function WhatsMyType(arg) {
  return typeof arg;
}

5. // Write a JavaScript program that adds 2 numbers together.//

const x = 13;
const y = 8;
const z = x + y;



6. // Write a JavaScript program that runs only when 2 things are true.//

function bothArgumentsAreTrue(arg1, arg2) {
  if (arg1 && arg2) {
    return 'both are true';
  }
}

bothArgumentsAreTrue(4, 3000);

7. // Write a JavaScript program that runs when 1 of 2 things are true.//

function oneArgumentIsTrue(arg1, arg2) {
  if (arg1 || arg2) {
    return 'one is true';
  }
}

oneArgumentIsTrue(4, 3000);

8. // Write a JavaScript program that runs when both things are not true.//