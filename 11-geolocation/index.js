function getUserCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  });
}

getUserCoordinates()
  .then((coords) => console.log(coords))
  .catch((error) => console.log(error));
