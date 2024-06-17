function hasConsecutiveThrees(arr) {
    // Traverse the list
    for (let i = 0; i < arr.length - 1; i++) {
        // Check if the current element and the next element are both 3
        if (arr[i] === 3 && arr[i + 1] === 3) {
            return true;
        }
    }
    // Return false if no consecutive 3s are found
    return false;
}

// Example usage:
const exampleList = [1, 3, 3, 4, 5];
console.log(hasConsecutiveThrees(exampleList)); // Output: true

const exampleList2 = [1, 3, 4, 3, 5];
console.log(hasConsecutiveThrees(exampleList2)); // Output: false

