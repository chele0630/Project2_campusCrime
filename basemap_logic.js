// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer to the map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: apiKey
  }).addTo(myMap);
  
  var states = [{
      location: [32.7794,-86.8287],
      name: "Alabama",
      rating: "4 stars"      
  },
  {
      location: [64.0685,-152.2782],
      name: "Alaska",
      rating: "5 stars"
  },
  {
      location: [34.2744,-111.6602],
      name: "Arizona",
      rating: "5 stars"
  },
  {
      location: [34.8938,-92.4426],
      name: "Arkansas",
      rating: "3 stars"
  },
  {
      location: [37.1841,-119.4696],
      name: "California",
      rating: "1 star"
  },
  {
      location: [38.9972,-105.5478],
      name: "Colorado",
      rating: "3 stars"
  },
  {
      location: [41.6219,-72.7273],
      name: "Connecticut",
      rating: "3 stars"
  },
  {
      location: [38.9896,-75.5050],
      name: "Delaware",
      rating: "2 stars"
  },
  {
      location: [28.6305,-82.4497],
      name: "Florida",
      rating: "4 stars"
  },
  {
      location: [32.6415,-83.4426],
      name: "Georgia",
      rating: "4 stars"
  },
  {
      location: [20.2927,-156.3737],
      name: "Hawaii",
      rating: "1 star"
  },
  {
      location: [44.3509,-114.6130],
      name: "Idaho",
      rating: "5 stars"
  },
  {
    location: [40.0417,-89.1965],
    name: "Illinois",
    rating: "2 stars"
  },
  {
    location: [39.8942,-86.2816],
    name: "Indiana",
    rating: "4 stars"
  },
  {
    location: [42.0751,-93.4960],
    name: "Iowa",
    rating: "3 stars"
  },
  {
    location: [38.4937,-98.3804],
    name: "Kansas",
    rating: "5 stars"
  },
  {
    location: [37.5347,-85.3021],
    name: "Kentucky",
    rating: "4 stars"
  },
  {
    location: [31.0689,-91.9968],
    name: "Louisiana",
    rating: "3 stars"
  },
  {
    location: [45.3695,-69.2428],
    name: "Maine",
    rating: "5 stars"
  },
  {
    location: [39.0550,-76.7909],
    name: "Maryland",
    rating: "1 star"
  },
  {
    location: [42.2596,-71.8083],
    name: "Massachusetts",
    rating: "2 stars"
  },
  {
    location: [44.3467,-85.4102],
    name: "Michigan",
    rating: "3 stars"
  },
  {
    location: [46.2807,-94.3053],
    name: "Minnesota",
    rating: "2 stars"
  },
  {
    location: [32.7364,-89.6678],
    name: "Mississippi",
    rating: "5 stars"
  },
  {
    location: [38.3566,-92.4580],
    name: "Missouri",
    rating: "5 stars"
  },
  {
    location: [47.0527,-109.6333],
    name: "Montana",
    rating: "4 stars"
  },
  {
    location: [41.5378,-99.7951],
    name: "Nebraska",
    rating: "3 stars"
  },
  {
    location: [39.3289,-116.6312],
    name: "Nevada",
    rating: "3 stars"
  },
  {
    location: [43.6805,-71.5811],
    name: "New Hampshire",
    rating: "5 stars"
  },
  {
    location: [40.1907,-74.6728],
    name: "New Jersey",
    rating: "1 star"
  },
  {
    location: [34.4071,-106.1126],
    name: "New Mexico",
    rating: "4 stars"
  },
  {
    location: [42.9538,-75.5268],
    name: "New York",
    rating: "1 star"
  },
  {
    location: [35.5557,-79.3877],
    name: "North Carolina",
    rating: "4 stars"
  },
  {
    location: [47.4501,-100.4659],
    name: "North Dakota",
    rating: "4 stars"
  },
  {
    location: [40.2862,-82.7937],
    name: "Ohio",
    rating: "4 stars"
  },
  {
    location: [35.5889,-97.4943],
    name: "Oklahoma",
    rating: "4 stars"
  },
  {
    location: [43.9336,-120.5583],
    name: "Oregon",
    rating: "3 stars"
  },
  {
    location: [40.8781,-77.7996],
    name: "Pennsylvania",
    rating: "4 stars"
  },
  {
    location: [41.6762,-71.5562],
    name: "Rhode Island",
    rating: "3 stars"
  },
  {
    location: [33.9169,-80.8964],
    name: "South Carolina",
    rating: "3 stars"
  },
  {
    location: [44.4443,-100.2263],
    name: "South Dakota",
    rating: "4 stars"
  },
  {
    location: [35.8580,-86.3505],
    name: "Tennessee",
    rating: "4 stars"
  },
  {
    location: [31.4757,-99.3312],
    name: "Texas",
    rating: "4 stars"
  },
  {
    location: [39.3055,-111.6703],
    name: "Utah",
    rating: "4 stars"
  },
  {
    location: [44.0687,-72.6658],
    name: "Vermont",
    rating: "5 stars"
  },
  {
    location: [37.5215,-78.8537],
    name: "Virginia",
    rating: "4 stars"
  },
  {
    location: [47.3826,-120.4472],
    name: "Washington",
    rating: "3 stars"
  },
  {
    location: [38.6409,-80.6227],
    name: "West Virginia",
    rating: "5 stars"
  },
  {
    location: [44.6243,-89.9941],
    name: "Wisconsin",
    rating: "4 stars"
  },
  {
    location: [42.9957,-107.5512],
    name: "Wyoming",
    rating: "5 stars"
  }
];

for (var i=0;i<states.length;i++){
    var state = states[i];
    L.marker(state.location)
    .bindPopup(state.name+"<br> Gun Control Rating: <br>"+state.rating)
    .addTo(myMap);
} 
