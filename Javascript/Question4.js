/*Design a function that determines whether a given string is a pangram. A
pangram is a sentence or phrase containing every letter of the alphabet at
least once. Punctuation and case are typically ignored. For example, the
string "The quick brown fox jumps over the lazy dog" is a pangram, while
"Hello, world!" is not.
*/
function isPangram(str) {
    // Remove all non-alphabetic characters from the string and convert to lowercase
    str = str.replace(/[^a-z]/g, '').toLowerCase();
    
    // Use a Set to remove duplicates and count the number of unique letters
    let uniqueLetters = new Set(str).size;
    // If the number of unique letters is 26, it is a pangram
    return uniqueLetters === 26;
}

// Test case 1
let string1 = "The quick brown fox jumps over the lazy dog,.";
console.log(isPangram(string1)); // Output: true
//test case 2
string2 = "Hello world";
console.log(isPangram(string2)); // Output: false
