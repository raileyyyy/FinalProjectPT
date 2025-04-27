var map = L.map('map').setView([14.6258, 121.0617], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

let marker, circle, zoomed;

function success(pos) {
    const lat = pos.coords.latitude;
    const long = pos.coords.longitude;
    const accuracy = pos.coords.accuracy;

    if (marker) {
        map.removeLayer(marker);
        map.removeLayer(circle);
    }

    marker = L.marker([14.6258, 121.0617]).addTo(map);

    // Adjust the radius here
    const adjustedRadius = accuracy * 0.0125; // Scale down the radius by 50%
    circle = L.circle([14.6258, 121.0617], { radius: adjustedRadius }).addTo(map);

    if (!zoomed) {
        zoomed = map.fitBounds(circle.getBounds());
    }

    map.setView([lat, long]);
}

function error(err) {
    if (err.code === 1) {
        alert("Please allow geolocation access");
    } else {
        alert("Cannot get current location");
    }
}

// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);
