//
// For more info on how this magic works:
// https://github.com/meetup/gimme
//

var views = new ViewManager(function(){
	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

	var groupId = getParameterByName('mugID') || 1579989,
			eventId = getParameterByName('mupID') || 223601492,
			topic   = getParameterByName('topic') || 'hiking',
			topicID = 638, //hiking
			lat     = getParameterByName('lat') || 52.5167,
			lon     = getParameterByName('lon') || 13.3833;

			// Chicago lat/lon
			// lat     = 41.8369,
			// lon     = 87.6847;

	// ↓ ↓ ↓ ↓ Where we pick which data we want ↓ ↓ ↓ ↓
	var shoppingList = [
		{"gimme": "groups", "key":"localGroups", "data": {"lat": lat, "lon": lon, "topic": topic, "page": 3}, "children": [
			{"gimme": "events", "data": {"page": 1}, "match": [ ["id", "group_id"] ] }
		]},
		{"gimme": "groups", "key":"globalGroups", "data": {"topic": topic, "page": 10, "zip": ""}},
		{"gimme": "topic_categories", "key":"sugTopics", "data": {"lat": lat, "lon": lon, "radius": 50}},
		{"gimme": "recommended_topics", "key":"relatedTopics", "data": {"other_topics": topicID, "page": 10}}
	];
	// ↑ ↑ ↑ ↑ Where we pick which data we want ↑ ↑ ↑ ↑

	gimme.get(shoppingList, true).then(function(data){
		$.extend(views.data, data);

		// Now that the data is all ready, go ahead and start the router
		window.addEventListener('hashchange', processHash);
		processHash();

		console.log(views.data);

		//
		// TODO: Get this code to fire ONLY when the template is rendered. This is sloppy
		//
		L.mapbox.accessToken = 'pk.eyJ1IjoibXBlcnJvdHRpIiwiYSI6ImNpaGpyOWZpdDBuZ2p0cGx6bnFoZWpyc2MifQ.i1DaUuwQ2EdEGmGqQcuTyw';
		var map = L.mapbox.map('map', 'mapbox.streets').setView([lat, lon], 4);
		map.scrollWheelZoom.disable();
		//

	});

});
