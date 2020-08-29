// Code your solution here

function findMatching(drivers, string) {
  let matchedDrivers = drivers.filter(d => {
    return d === string;
  });
  return matchedDrivers;
}

function fuzzyMatch(drivers, string) {
  
}