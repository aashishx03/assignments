/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largestNum = numbers[0];
  for (let item of numbers) {
    if (item > largestNum) {
      largestNum = item;
    }
  }
  return largestNum;
}

console.log(findLargestElement([]));

module.exports = findLargestElement;
