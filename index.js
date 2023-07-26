// Task 1 
//: Create a function that takes a string as input and returns the reversed version of the string without using the built -in reverse() method.

const reverseString = (str) => {
  reversed = "";
  for (ch of str) {
    reversed = ch + reversed;
  }
  return reversed;
};
// Example Input: "hello world" Example Output: "dlrow olleh"
// console.log(reverseString("hello world"));







// Task 2 
//: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumPositiveNumbers = (arr) => {
  positiveNumbersArray = [];
  for (item of arr) {
    if (item > 0) {
      positiveNumbersArray.push(item);
    }
  }
  return positiveNumbersArray.reduce((pre, current) => pre + current, 0);
};

// console.log(sumPositiveNumbers([2, -5, 10, -3, 7]));
// Example Input: [2, -5, 10, -3, 7] Example Output: 19








// Task 3
//: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const findFrequent = (arr) => {
  let sortArray = arr.sort((a, b) => a - b);
  let mostFreq = arr[0];
  let currentFrequency = 1;
  for (let i = 0; i < sortArray.length; i++) {}
};

findFrequent([3, 5, 2, 5, 3, 3, 1, 4, 5]);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.
//  Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)




// Task 5
//: Implement a simple JavaScript calculator.The calculator should take two numbers and an operator(+, -, *, /) as input and return the result of the operation.

const calculator = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "Invalid operator";
  }
};
// console.log(calculator(5, 3, "/"));






// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

const randomPasswordGen = (passwordLength) => {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    let randomCh = allCharacters[randomIndex];
    password += randomCh;
  }
  return password;
};

// console.log(randomPasswordGen(10));




// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.







// Task 8
//: Implement a JavaScript function to find the second smallest element in an array of numbers.The function should return the second smallest number.
const findSecondSmallest = (arr) => {
  let smallest = arr[0];
  let secondSmallest = arr[1];
  for (item of arr) {
    if (smallest > item) {
      smallest = item;
    }
  }

  for (item of arr) {
    if (item > smallest && item < secondSmallest) {
      secondSmallest = item;
    }
  }

  return secondSmallest;
};

// console.log(findSecondSmallest([7, 43, 23, 222]));
