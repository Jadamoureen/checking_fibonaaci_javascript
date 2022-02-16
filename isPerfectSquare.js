const isPerfectSquare = input => {

    if (input <= 0) return false;

    const SQUARE_ROOT = parseInt(input ** 0.5);
    return SQUARE_ROOT * SQUARE_ROOT === input;
};

console.log( isPerfectSquare(4) ); //true
console.log( isPerfectSquare(5) ); //false

