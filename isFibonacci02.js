/**
 * A JavaScript function that when you input
 * a number the function you have created checks
 * whether the number belongs to the Fibonacci
 * sequence or not.
*/

/**
 * @IS_FIBONACCI: Function to generate a Fibonacci Sequence below a given number.
 * @param {number} input - The number to generate the Fibonacci sequence below.
 * @return: null
 *
 */

// User enters a prefered number
const userInput = prompt('Enter a positive number: ');
IS_FIBONACCI(userInput);

function IS_FIBONACCI(input) {
    // console.log('The number you entered is: ' + input);
    let number1 = 0,
        number2 = 1,
        nextNumber;

    console.log('Fibonacci Series:');
    console.log(number1); // print 0
    console.log(number2); // print 1

    nextNumber = number1 + number2;

    const inputInteger = parseInt(input);

    while (nextNumber <= inputInteger) {

        // print the next Number
        console.log(nextNumber);

        number1 = number2;
        number2 = nextNumber;
        nextNumber = number1 + number2;
    }

    return null
}