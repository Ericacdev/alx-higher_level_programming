#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
last_digits = number % (-10 if number < 0 else 10)
print("Last digit of", number, "is", last_digits, "and is ", end="")
if last_digits == 0:
    print("0")
elif last_digits > 5:
    print("greater than 5")
else:
    print("less than 6 and not 0")
