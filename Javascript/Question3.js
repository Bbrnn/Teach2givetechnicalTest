function mostFrequentCharacter(string) {
    // Object to store the frequency of each character
    const charFrequency = {};

    // Traverse the string
    for (let char of string) {
        // Increment the frequency of the character
        if (charFrequency[char]) {
            charFrequency[char] += 1;
        } else {
            charFrequency[char] = 1;
        }
    }

    // Initializing the result and count
    let result = '';
    let count = 0;

    // Find the character with the highest frequency
    for (let char in charFrequency) {
        if (charFrequency[char] > count) {
            result = char;
            count = charFrequency[char];
        }
    }

    return result;
}

// Input from user
string=prompt("Enter your string:\n")
ocnsole.log("The frequent charatcer in the string is:",mostFrequentCharacter(string));
