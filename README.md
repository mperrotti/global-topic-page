# Global Topic Page

## Notes from Mike

### Map parameters
[Mapbox](https://www.mapbox.com/) zoom level 4 with selected city as center point

### "Nearby Meetups" functionality
* If there are 6 or more MUGs within 100 miles, show 6 MUGs
* If there are <6 MUGs within 100 miles, show up to 3 MUGs
* If there are 0 MUGs within 100 miles, hide the stripe

### Suggested topic list logic
When clicking to change the topic you're viewing, a list of "Suggested" topics appears. Use [`/2/topic_categories`](http://www.meetup.com/meetup_api/docs/2/topic_categories/) and take the first `best_topic` from each category. If it affects what gets returned, pass in user's lat/lon with a radius of 50mi

### Start stripe functionality
* If there are <500 people with topic within 50 miles, say the actual number
* If there are >500 people with topic within 50 miles, say "500+"
* If there are 0 people with topic within 50 miles, hide the start stripe


## Preview different data in the prototype
* passing `?topic={topic-shortname}` will show data about another topic
* passing `?lat={latCoord}&lon={lonCoord}` should change the map and content the "Nearby Meetups" stripe
