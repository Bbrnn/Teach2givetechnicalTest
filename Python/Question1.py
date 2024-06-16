#Design a function that reverses the digits of an integer. For example, 50
#should become 5 and -12 should become -21.

def ReverseInteger(integer):

    #convert the integer to string
    string = str(integer)

    reverse_string = string[::-1]

    #Convert the string back to an integer
    integer = int(reverse_string)
    
    return integer

if __name__ == "__main__":
        print("Enter an integer")
        integer=input()
        print("The reverse of the integer is:",ReverseInteger(integer))

