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
    zoom: 7,
    center: location,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_LEFT,
    },
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#ebe3cd",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#523735",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f1e6",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#c9b2a6",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#dcd2be",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#ae9e90",
          },
        ],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#93817c",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#a5b076",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#447530",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f1e6",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          {
            color: "#fdfcf8",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#f8c967",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#e9bc62",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [
          {
            color: "#e98d58",
          },
        ],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [
          {
            color: "#db8555",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#806b63",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#8f7d77",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#ebe3cd",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#dfd2ae",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            color: "#b9d3c2",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#92998d",
          },
        ],
      },
    ],
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
