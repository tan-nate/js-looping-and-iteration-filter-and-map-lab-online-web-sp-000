// Code your solution here:
 function driversWithRevenueOver(drivers, revenue) {
   return drivers.filter(function (driver) {
     return driver.revenue > revenue;
   });
 }

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = driversWithRevenueOver(drivers, revenue);
  return newDrivers.map(driver => driver.name);
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher).map(driver => driver.name);
}
