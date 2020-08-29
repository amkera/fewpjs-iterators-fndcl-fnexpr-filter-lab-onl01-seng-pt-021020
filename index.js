// Code your solution here
function findMatching(driversArray, stringQuery) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase() === sought.toLowerCase()
  )
}

function fuzzyMatch(source, testString) {
  return source.filter( possibleMatch =>
    possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}