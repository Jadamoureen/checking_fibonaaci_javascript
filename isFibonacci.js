// Time Complexity: O(1)
//1. Find the perfect square of the input
const isPerfectSquare = function (input) {
    //const SQUARE_ROOT = parseInt(Math.sqrt(input)); commonest way to find square root
    const SQUARE_ROOT = parseInt(input ** 0.5);
    return SQUARE_ROOT * SQUARE_ROOT === input; //Is square of the input equal to the input
};

//2. Check if the perfect square is a Fibonacci number
//3. If yes, return true
//4. If not, return false
//5. If the input is less than 0, return false
const isFibonacci = function (input) {
    if(input < 0)  return false;
    return isPerfectSquare(5 * input * input + 4) || isPerfectSquare(5 * input * input - 4);
};
//Testing if the input is a Fibonacci number
for ( i = 0; i < 10; i++ ) {
    console.log( isFibonacci(i) ? `${i}` : `${i} not`);
}

//0
//1
//2
//3
//4 not
//5
//6 not
//7 not
//8
//9 not
