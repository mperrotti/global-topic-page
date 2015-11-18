//
// For more info on how this magic works:
// https://github.com/meetup/gimme
//

var views = new ViewManager(function(){
	gimme.apiKey = "7060231d422c3421e3c13406e606631"; // use your own api key!

	var groupId = getParameterByName('mugID') || 1579989,
			eventId = getParameterByName('mupID') || 223601492;

	// ↓ ↓ ↓ ↓ Where we pick which data we want ↓ ↓ ↓ ↓
	var shoppingList = [
	{"gimme": "group", "data":  {"group_id": groupId}},
	{"gimme": "event", "data":  {"event_id": eventId}},
	        {"gimme": "event_comments", "data":  {"event_id": eventId}},
	        {"gimme": "photos", "key": "photosShort", "data": {"page": 6, "event_id": eventId, group_id: groupId}},
	        {"gimme": "photos", "data":  {"event_id": eventId, "group_id": groupId}},
	{"gimme": "rsvps", "data":  {"event_id": eventId}}
	];
	// ↑ ↑ ↑ ↑ Where we pick which data we want ↑ ↑ ↑ ↑

	gimme.get(shoppingList, true).then(function(data){
		$.extend(views.data, data);

		// Now that the data is all ready, go ahead and start the router
		window.addEventListener('hashchange', processHash);
		processHash();

		console.log(views.data);
	});

});
