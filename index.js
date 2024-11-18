// Find Even Numbers in an Array
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Find Odd Numbers in an Array
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}

// Print a Pattern
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        console.log('* '.repeat(i));
    }
}
// print downward pattern
function printDown(n) {
    for (let i = n; i >= 1; i--) {
        console.log("* ".repeat(i));
    }
}

// Test the functions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Even Numbers:", findEvenNumbers(numbers));
console.log("Odd Numbers:", findOddNumbers(numbers));
//Output the pattern
console.log("Pattern:");
printPattern(5);
printDown(5);
