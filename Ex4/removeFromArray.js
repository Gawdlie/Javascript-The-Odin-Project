const removeFromArray = function(array, ...elementsRemoved) {
  const newArray = [];

// for each of the elements in the array, ... is the rest operator to account for all possible arguments
  array.forEach((element) => {
    if(!elementsRemoved.includes(element)) {
      newArray.push(element);
    }
  });

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;