const array = [1, 2, 3, 4, 5, 6];

function isEven(num) {
  return num % 2 == 0;
}

function triple(num) {
  return num * 3;
}

function sumOfTripledEvens(array) {
  // we need to filter out the odd numbers
  const evenNumbers = array.filter(isEven);

  // map each element
  const tripledEvenNumbers = evenNumbers.map(triple);

  // reduce
  const totalSum = tripledEvenNumbers.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);

  return totalSum;
}

// expected: 36
console.log(sumOfTripledEvens(array));