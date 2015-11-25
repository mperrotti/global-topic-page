//
// Setup tools for playing with routes and URL params
//
var router = new Rlite();

function processHash() {
	var hash = location.hash || '#!/';
	router.run(hash.substr(2));
}

function getParameterByName(name) {
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		results = regex.exec(location.search);
	return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}


//
// Stuff to do depending on what the URL is
//
router.add('', function(context){ // homepage
	views.show({
		template: 'main-template',
		events: {
		},
		observe: {
		},
		header : {
			title: 'Global Topic Page',
			buttons: [
				{ label: 'Actions', icon: 'ellipsis-h', fn: function(){alert('take action')} }
			]
		}
	});

	// this is weird, make it easier
	$('.js-fndTextTrunc').each(function() {
		var $el = $(this);
		ellipsis($el, 7, { wrapWith: '<p>', more: true, title: false }); // see js/src/foundation/foundationTextTrunc for this code
	});

	$(document.body).on('click', '[data-ellipsis-applied] [data-toggle-ellipsis]', function(e) { toggleEllipsis(e) });

});

/*
router.add('mup-photos', function(context){ //photo view
	views.show({
		template: 'photos-template',
		events: {
		},
		observe: {
		},
		header : {
			title: views.data.event.name,
			subtitle: views.data.photos.length + ' photos'
		}
	});

});

router.add('attendees', function(context){ //photo view
	views.modal_show({
		template: "member-listing-template",
		events: {
		},
		header : {
			title: views.data.event.yes_rsvp_count + ' people',
			subtitle: 'to ' + views.data.event.name
		}
	});
});
*/
