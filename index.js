// Code your solution here
function findMatching(driversArray, stringQuery) {
  return driversArray.filter( possibleMatch =>
    possibleMatch.toLowerCase() === stringQuery.toLowerCase()
  )
}

function fuzzyMatch(driversArray, stringQuery) {
  return driversArray.filter(driver => {
    driver.toLowerCase().startsWith(stringQuery.toLowerCase());
  })
  return driver;
}
