// Code your solution here
// findMatching function
function findMatching(drivers, query) {
    // Convert both query and driver names to lowercase for case insensitivity
    const lowerCaseQuery = query.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === lowerCaseQuery);
  }
  
  // fuzzyMatch function
  function fuzzyMatch(drivers, letters) {
    // Filter drivers whose names start with the provided letters (case insensitive)
    const lowerCaseLetters = letters.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase().startsWith(lowerCaseLetters));
  }
  
  // matchName function
  function matchName(drivers, name) {
    // Filter drivers whose name property matches the provided string (case insensitive)
    const lowerCaseName = name.toLowerCase();
    return drivers.filter(driver => driver.name.toLowerCase() === lowerCaseName);
  }
  