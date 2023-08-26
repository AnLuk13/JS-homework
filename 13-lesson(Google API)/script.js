const submit = document.getElementById("submitCity");
const showPath = document.getElementById("showPath");
let map;
let sourceAutocomplete;
let destinationAutocomplete;
let directionsRender;
let directionsService;

function initMap() {
  const location = { lat: 47.00367, lng: 28.907089 };
  const mapSelector = document.getElementById("map");
  map = new google.maps.Map(mapSelector, {
    zoom: 6,
    center: location,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
    },
  });

  placeMarker(location, map);

  directionsService = new google.maps.DirectionsService();
  directionsRender = new google.maps.DirectionsRenderer();
  directionsRender.setMap(map);
  sourceAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("source")
  );
  destinationAutocomplete = new google.maps.places.Autocomplete(
    document.getElementById("destination")
  );
  //   const marker = new google.maps.Marker({
  //     position: location,
  //     map: map,
  //   });
  showPath.addEventListener("click", () => {
    calculateRoute();
  });
}

submit.addEventListener("click", () => {
  const city = document.getElementById("city").value;
  geocodeCity(city);
});

function geocodeCity(city) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: city }, (result, status) => {
    if (status === "OK" && result.length > 0) {
      var location = result[0].geometry.location;
      placeMarker(location, map);
    } else {
      console.log("No such city");
    }
  });
}

function placeMarker(location, map) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
  map.setCenter(location);
}

function calculateRoute() {
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const request = {
    origin: source,
    destination: destination,
    travelMode: "DRIVING",
  };
  directionsService.route(request, (result, status) => {
    if (status === "OK") {
      directionsRender.setDirections(result);
    } else {
      console.log("Couldn't access path");
    }
  });
}
