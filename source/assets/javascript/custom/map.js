$(function(){

  // API Key: AIzaSyBYC_HIH5QDJ0hX9EV3KGuiN360v8X01oo
  // Clusters Docs: https://htmlpreview.github.io/?https://github.com/googlemaps/v3-utility-library/blob/master/markerclustererplus/docs/reference.html

  if ( $('.map').length > 0 ) {
    // google.maps.event.addDomListener(window, 'load', initMap);
  }

});

var map, markerImg, markerShape, clusterImg, clusterShape, locations;

function initMap(){

  markerImg = {
      url: '/assets/images/content/marker.png',
      size: new google.maps.Size(36, 36),
      origin: new google.maps.Point(0,0),
      anchor: new google.maps.Point(18, 18),
      scaledSize: new google.maps.Size(36, 36)
  };

  markerShape = {
      coords: [0, 0, 36, 0, 36, 36, 0, 36],
      type: 'poly'
  };

  clusterImg = '/assets/images/content/cluster';
  clusterExt = 'svg';

  locations = [
    {lat: 40.404867, lng: -3.673120}, // Madrid
    {lat: 41.389582, lng: 2.173952}, // Barcelona
    {lat: 42.810118, lng: -1.660274}, // Pamplona
    {lat: 54.511266, lng: 18.541763}, // Polonia
    {lat: 19.410481, lng: -99.181033}, // Mexico
    {lat: 8.983290, lng: -79.515534}, // Panama
    {lat: 23.119717, lng: -82.429884} // Cuba
  ];

  initContactMap();
}


function initContactMap() {

  // Initialize map.
  var wrapper = document.getElementsByClassName('map__map')[0];
  map = new google.maps.Map(wrapper, {
    zoom: 3,
    center: {lat: 0, lng: 0}
  });

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      map: map,
      icon: markerImg,
      shape: markerShape,
    });
  });

  var clusterOpts = {
    styles: [
      {
        anchorIcon: [18, 18],
        height: 36,
        width: 36,
        url: clusterImg + '1.' + clusterExt,
        textColor: 'white',
        textSize: 16
      },
      {
        anchorIcon: [18, 18],
        height: 36,
        width: 36,
        url: clusterImg + '2.' + clusterExt,
        textColor: 'white',
        textSize: 16
      },
      {
        anchorIcon: [18, 18],
        height: 36,
        width: 36,
        url: clusterImg + '3.' + clusterExt,
        textColor: 'white',
        textSize: 16
      },
      {
        anchorIcon: [18, 18],
        height: 36,
        width: 36,
        url: clusterImg + '4.' + clusterExt,
        textColor: 'white',
        textSize: 16
      },
      {
        anchorIcon: [18, 18],
        height: 36,
        width: 36,
        url: clusterImg + '5.' + clusterExt,
        textColor: 'white',
        textSize: 16
      },
    ]
  }
  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, clusterOpts);

  // Set map bounds with all markers
  boundsMarkers(markers);
}

function boundsMarkers(marcadores){
  var bounds = new google.maps.LatLngBounds();
  for (var i = 0; i < marcadores.length; i++) {
    bounds.extend(marcadores[i].getPosition());
  }
  map.fitBounds(bounds); // Adjust map view to contain all markers
  map.panTo(bounds.getCenter()); // Fix to avoid markers disappearence (happens sometimes with map.setCenter and map.fitBounds)
}
