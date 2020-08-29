// Code your solution here
function findMatching(driversArray, stringQuery) {
  return driversArray.filter( possibleMatch =>
    possibleMatch.toLowerCase() === stringQuery.toLowerCase()
  )
}

function fuzzyMatch(driversArray, stringQuery) {
  return driversArray.filter( possibleMatch =>
    //possibleMatch.toLowerCase().indexOf(stringQuery.toLowerCase()) === 0
    
    possibleMatch.startsWith(stringQuery) === true;
  )
}