// Code your solution here
function findMatching(driversArray, stringQuery) {
  return driversArray.filter( possibleMatch =>
    possibleMatch.toLowerCase() === stringQuery.toLowerCase()
  )
}

function fuzzyMatch(source, testString) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

