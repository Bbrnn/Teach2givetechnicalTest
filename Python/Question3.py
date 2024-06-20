def mostFrequentCharacter(string):
    # Dictionary to store the frequency of each character
    char_frequency = {}

    # Traverse the string
    for char in string:
        # Increment the frequency of the character
        if char in char_frequency:
            char_frequency[char] += 1
        else:
            char_frequency[char] = 1

    # Initialize the result and count
    result = ''
    count = 0

    # Find the character with the highest frequency
    for char in char_frequency:
        if char_frequency[char] > count:
            result = char
            count = char_frequency[char]

    return result

# Input from user
string = input("Enter your string\n")

# Print the most frequent character
print("The most frequent character is:", mostFrequentCharacter(string))

