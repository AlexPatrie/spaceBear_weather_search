# spaceBear_weather_search
This is a weather search app that allows you to type in a city name and return the temperature (F), conditions, windspeed(mph), Sunrise Time, and Sunset Time for that city.  As an added feature to this app, the background image of the webpage/extension body will appear as a commonly-searched image from whatever city you are searching.  For example, a search for "New York" will return a background image of (probably) a subway station or skyscraper.  You can use the search button OR enter key to initialize the search.  ALSO, I have enabled this application to be used as a Chrome Extension!! (peep the .JSON)  

*DISCLAIMER*: I only recently added the 'Sunrise' and 'Sunset' features.  The value for these parameters are returned as a Unix timestamp from Open Weather Map API...you will see in the JS that I have converted this timestamp to a readable time based on the date.  I am still "cleaning this look up"! 


This is very much my first attempt at working with API's, so any feedback would be greatly appreciated!  Much love!
