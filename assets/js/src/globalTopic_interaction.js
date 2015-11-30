//
// Fake topic search
//
function topicFuzzySearch(event) {
	if (event.original.keyCode === 13) {
		console.log('show some topix');
	}
}

//
// Mapbox code
//
function loadMap() {
	//
	// TODO: Get this code to fire ONLY when the template is rendered. This is sloppy
	//
	if ($('#map').length){
		L.mapbox.accessToken = 'pk.eyJ1IjoibXBlcnJvdHRpIiwiYSI6ImNpaGpyOWZpdDBuZ2p0cGx6bnFoZWpyc2MifQ.i1DaUuwQ2EdEGmGqQcuTyw';
		var map = L.mapbox.map('map', 'mapbox.streets').setView([views.data.lat, views.data.lon], 4);
		map.scrollWheelZoom.disable();
	} else {
		console.log('map not yet loaded');
	}
}
