// Code your solution here

function findMatching(drivers, string) {
  let string = string.toLowerCase();
  let drivers = drivers.toLowerCase();
  let matchedDrivers = drivers.filter(d => {
    return d === string;
  });
  return matchedDrivers;
}

function fuzzyMatch(drivers, stringQuery) {
  let lowercaseStringQuery = stringQuery.toLowerCase();
  let matchedDrivers = drivers.filter(d => {
    if (d.startsWith(lowercaseStringQuery)) {
      return true;
    } else {
      return false;
    }
  })
  return matchedDrivers;
  
}