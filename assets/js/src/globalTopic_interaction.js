//
// Fake topic search
//
function topicFuzzySearch(event) {
	var sugTopicArea = document.getElementById('suggestedTopicArea'),
			searchResults = document.getElementById('results');

	if (event.original.keyCode === 13 || event.node.value.length >= 2) {

		// hide suggested topics
		if (sugTopicArea.classList)
			sugTopicArea.classList.add('display--none');
		else
			sugTopicArea.className += ' ' + 'display--none';

		// wait 250ms, then show loader until API responds

		// API responded
			// if there are results, show them
			if (searchResults.classList)
				searchResults.classList.remove('display--none');
			else
				searchResults.className = searchResults.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');


			// else, show empty state

	} else {
		if (sugTopicArea.classList)
			sugTopicArea.classList.remove('display--none');
		else
			sugTopicArea.className = sugTopicArea.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	}

}

//
// Fake city search
//
function cityFuzzySearch(event) {
	var cityPickerArea = document.querySelectorAll('.js-locationList'),
			searchResults = document.getElementById('cityResults');

	for (var i = 0; i < cityPickerArea.length; i++) {
		if (event.original.keyCode === 13 || event.node.value.length >= 2) {

			// hide suggested topics
			if (cityPickerArea[i].classList)
				cityPickerArea[i].classList.add('display--none');
			else
				cityPickerArea[i].className += ' ' + 'display--none';

			// wait 250ms, then show loader until API responds

			// API responded
				// if there are results, show them
				if (searchResults.classList)
					searchResults.classList.remove('display--none');
				else
					searchResults.className = searchResults.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');


				// else, show empty state

		} else {
			if (cityPickerArea[i].classList)
				cityPickerArea[i].classList.remove('display--none');
			else
				cityPickerArea[i].className = cityPickerArea[i].className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	}
}

//
// Load more of largest Meetups
//
function moreLargest(event) {
	event.original.preventDefault();

	alert('show 10 more. coming soon to prototype');
	// show loader
	// remove .display--none from list items
	// hide loader
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
		var map = L.mapbox.map('map', 'mapbox.streets').setView([views.data.lat, views.data.lon], 7);
		map.scrollWheelZoom.disable();
	} else {
		console.log('map not yet loaded');
	}
}
