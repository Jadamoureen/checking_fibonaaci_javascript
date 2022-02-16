import sys
def is_perfect_square(input):
    # Square root of input
    sqrt = int(input ** 0.5)
    # If square root is equal to input
    if sqrt * sqrt == input:
        return True
    else:
        return False

sys.modules[__name__] = is_perfect_square
