## Installing depends
cd to whatever directory this is saved in, then run `npm install` followed by `bower update`, and finally `grunt build`
Message me if you have issues.

## Preview different data in the prototype
* passing `?topic={topic-shortname}` will show data about another topic
* passing `?lat={latCoord}&lon={lonCoord}` should change the map and content the "Nearby Meetups" stripe

## Notes from Mike
### Map parameters
* When scoped to global or country: [Mapbox](https://www.mapbox.com/) zoom level 4 with selected city as center point
* When scoped to city: [Mapbox](https://www.mapbox.com/) zoom level 7 with selected city as center point

### Meetup group grid functionality
* If the user is scoped to a city, put the Meetup group grid inside of the top stripe
* If the user is scoped to country or wider, make the Meetup group grid it's own stripe
* Show these groups in order of activity
* If there are 4 or more MUGs within 100 miles, show 4 MUGs
* If there are <4 MUGs within 100 miles, show alternative layout:
  * [3 Meetups](http://askMikeForMock.up)
  * [2 Meetups](http://askMikeForMock.up)
  * [1 Meetup](http://askMikeForMock.up)
* If there are 0 MUGs within 100 miles, only show the start card [like so](http://askMikeForMock.up)
* If there are 0 MUGs within 100 miles AND there are 0 people with topic within 50 miles, don't show local content

### Start card functionality
* If there are <500 people with topic within 50 miles, say the actual number
* If there are >500 people with topic within 50 miles, say "500+"
* If there are 0 people with topic within 50 miles, hide the card

### Suggested topic list logic
* When clicking to change the topic you're viewing, a list of "Suggested" topics appears. Use [`/2/topic_categories`](http://www.meetup.com/meetup_api/docs/2/topic_categories/) and take the first `best_topic` from each category. If it affects what gets returned, pass in user's lat/lon with a radius of 50mi

### Topic search logic - duplicate mobile /create functionality
* When a user begins typing, clear out "Suggestions" content
* When a user has typed 2 characters, begin returning results
  * Wait 250 ms before showing [loading state](http://askMikeForMock.up)
* If no results are returned, show [empty state] (http://askMikeForMock.up)

## Preview different data in the prototype
* passing `?topic={topic-shortname}` will show data about another topic
* passing `?lat={latCoord}&lon={lonCoord}` should change the map and content the "Nearby Meetups" stripe
  * `_?zip=_` support coming soon
