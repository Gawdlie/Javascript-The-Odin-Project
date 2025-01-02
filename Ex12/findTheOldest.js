function getOldestPerson(oldest) {
  let oldestPerson = oldest[0];

  for(let i = 1; i < oldest.length; i++) {
    if((oldest[i - 1].yearOfDeath - oldest[i - 1].yearOfBirth) < (oldest[i].yearOfDeath - oldest[i].yearOfBirth)) {
      oldestPerson = oldest[i - 1];
    }
  }
  return oldestPerson;
}

const findTheOldest = function(oldest) {
  return getOldestPerson(oldest);
};

// Do not edit below this line
module.exports = findTheOldest;