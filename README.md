## Installing depends
cd to whatever directory this is saved in, then run `npm install` followed by `bower update`, and finally `grunt build`
Message me if you have issues.

### Meetup group grid functionality
* If there are 4 or more MUGs within 100 miles, show 4 MUGs
* If there are <4 MUGs within 100 miles, show alternative layout:
  * [3 Meetups](http://mperrotti.com/temp_storage/3mugs.png)
  * [2 Meetups](http://mperrotti.com/temp_storage/2mugs.png)
  * [1 Meetup](http://mperrotti.com/temp_storage/1mug.png)
* If there are 0 MUGs within 100 miles, only show the start card [like so](http://mperrotti.com/temp_storage/0mugs.png)
* If there are 0 MUGs within 100 miles AND there are 0 people with topic within 50 miles, don't show local content

### Start card functionality
* If there are <500 people with topic within 50 miles, say the actual number
* If there are >500 people with topic within 50 miles, say "500+"
* If there are 0 people with topic within 50 miles, hide the card

### Suggested topic list logic
* When clicking to change the topic you're viewing, a list of "Suggested" topics appears. Use [`/2/topic_categories`](http://www.meetup.com/meetup_api/docs/2/topic_categories/) and take the first `best_topic` from each category. If it affects what gets returned, pass in user's lat/lon (or zip) with a radius of 50mi

### Topic search logic - duplicate mobile /create functionality
* When a user begins typing, clear out "Suggestions" content
* When a user has typed 2 characters, begin returning results
  * Wait 250ms before showing [loading state](http://mperrotti.com/temp_storage/TopicSearch_loading.png)
* If no results are returned, show [empty state] (http://mperrotti.com/temp_storage/TopicSearch_empty.png)

### Global MUGs
* Clicking anywhere except the linked city name takes the user to the MUG
* Clicking the linked city name takes the user to the /find page, scoped to that city

## Preview different data in the prototype
* passing `?topic={topic-shortname}` will show data about another topic
* passing `?lat={latCoord}&lon={lonCoord}` should change the map and content the "Nearby Meetups" stripe
  * `_?zip=_` support coming soon
