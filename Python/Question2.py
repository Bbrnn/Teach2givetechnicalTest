#Write a recursive function to calculate the factorial of a number
def factorialNumber(num):

    #base case
    if num == 0:
        return 1

    #recursive case
    return num * factorialNumber(num - 1)

if __name__ == "__main__":
    num = 5

    print("The factorial of ", num, "is", factorialNumber(num))



