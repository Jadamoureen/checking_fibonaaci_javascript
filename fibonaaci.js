/*
Creating a javascript function that when you input 
a number the function you have created checks 
whether the number belongs to the Fibonacci 
sequence or not.
*/


// User enters a prefered number
const number = parseInt(prompt('Enter a positive number: '));
let number1 = 0,
    number2 = 1,
    nextNumber;

console.log('Fibonacci Series:');
console.log(number1); // print 0
console.log(number2); // print 1

nextNumber = number1 + number2;

while (nextNumber <= number) {

    // print the next Number
    console.log(nextNumber);

    number1 = number2;
    number2 = nextNumber;
    nextNumber = number1 + number2;
}
