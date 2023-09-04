function getUserCoordinates() {
  return new Promise((resolve, reject) => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      reject(new Error("Geolocation is not supported by this browser"));
    }
  });
}

getUserCoordinates()
  .then((coords) => console.log(coords))
  .catch((error) => console.log(error));
