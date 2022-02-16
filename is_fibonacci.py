import is_perfect_square

def is_fibonacci(input):
    # Check if input is a perfect square
    if is_perfect_square(5 * (input ** 2) + 4) or is_perfect_square(5 * (input ** 2) - 4):
        return True
    else:
        return False

for i in range(0, 11):
    if(is_fibonacci(i)):
        print(i, "is a Fibonacci number")
    else:
        print(i, "is not a Fibonacci number")