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

function exactMatch(drivers, criteria) {
  return drivers.filter(function (driver) {
    return Object.keys(driver).includes(Object.keys(criteria)) && Object.values(driver).includes(Object.values(criteria)) ;
  })
}
