
function initLeaflet() {
  var map = L.map('map', {
    zoomControl: false,
    attributionControl: false,
    minZoom: 3,
  }).setView([59.96843, 30.31764], 17);
  L.tileLayer('https://a.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=6170aad10dfd42a38d4d8c709a536f38').addTo(map);
  var myIcon = L.icon({
      iconUrl: 'img/map/pin.svg',
      iconSize: [38, 50],
  });
  L.marker([59.96843, 30.31764], {
    icon: myIcon,
    keyboard: false
  }).addTo(map)
}

export {initLeaflet};
