const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Returned IP:', ip);

  fetchCoordsByIP(ip, (error, coordinates) => {
    if (error) {
      console.log("It didn't work!", error);
      return;
    }

    console.log('It worked! Returned coordinates:', coordinates);

    fetchISSFlyOverTimes(coordinates, (error, passTimes) => {
      if (error) {
        console.log("It didn't work!", error);
        return;
      }

      console.log('It worked! Returned fly over times:', passTimes);
      
      nextISSTimesForMyLocation((error, passTimes) => {
        if (error) {
          return console.log("It didn't work!", error);
        }
        // success, print out the deets!
        console.log(passTimes);
      });
    });
  });
});
