// Code your solution here

function findMatching(drivers, queryString) {
  let queryString = string.toLowerCase();
  let drivers = drivers.toLowerCase();
  let matchedDrivers = drivers.filter(d => {
    return d === queryString;
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