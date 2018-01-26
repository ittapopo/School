function helloConsole() {
console.log("Hello");
}

function initialize() {
   var locations = [
     ['Bryggen ' + 'https://www.visitbergen.com/', 60.397527, 5.322348, 5],
     ['Nordnes', 60.398757, 5.307241, 4],
     ['Nøstet', 60.393923, 5.315309, 3],
     ['Sydnes', 60.38947, 5.318743, 2],
     ['Festplassen', 60.391294, 5.325352, 1]
   ];

   var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: new google.maps.LatLng(60.395025, 5.325094),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });

   var infowindow = new google.maps.InfoWindow();

   var marker, i;

   for (i = 0; i < locations.length; i++) {
     marker = new google.maps.Marker({
       position: new google.maps.LatLng(locations[i][1], locations[i][2]),
       map: map
     });

     google.maps.event.addListener(marker, 'click', (function(marker, i) {
       return function() {
         infowindow.setContent(locations[i][0]);
         infowindow.open(map, marker);
       }
     })(marker, i));
   }
}
