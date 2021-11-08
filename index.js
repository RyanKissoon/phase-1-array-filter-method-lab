// Code your solution here
function findMatching(drivers, string) {
    return drivers.filter( driver => driver.toLowerCase() === string.toLowerCase() )
  }
  
function fuzzyMatch(driversName, string){
    return driversName.filter( driver => driver.indexOf(string) === 0 )
}
function matchName(drivers, string) {
    return drivers.filter( driver => driver.name=== string );
}